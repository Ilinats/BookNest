class ReviewService {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getAllReviews(page = 1, limit = 10, filters = {}) {
        const skip = (page - 1) * limit;
        const { userId, bookId, minRating, maxRating, pace, focus } = filters;
        
        const where = {};
        
        if (userId) where.userId = parseInt(userId);
        if (bookId) where.bookId = parseInt(bookId);
        if (minRating) where.rating = { ...where.rating, gte: parseFloat(minRating) };
        if (maxRating) where.rating = { ...where.rating, lte: parseFloat(maxRating) };
        if (pace) where.pace = pace;
        if (focus) where.focus = focus;

        const [reviews, total] = await Promise.all([
            this.prisma.review.findMany({
                where,
                skip,
                take: parseInt(limit),
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true
                        }
                    },
                    book: {
                        select: {
                            id: true,
                            title: true,
                            author: true,
                            coverUrl: true
                        }
                    },
                    moods: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    tropes: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    genres: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            }),
            this.prisma.review.count({ where })
        ]);

        return {
            reviews,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }

    async getReviewById(id) {
        const review = await this.prisma.review.findUnique({
            where: { id: parseInt(id) },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true
                    }
                },
                book: {
                    select: {
                        id: true,
                        title: true,
                        author: true,
                        coverUrl: true,
                        pages: true,
                        publishDate: true
                    }
                },
                moods: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                tropes: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                genres: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        if (!review) {
            throw new Error('Review not found');
        }

        return review;
    }

    async createReview(reviewData) {
        const { userId, bookId, rating, text, pace, focus, lovable, contentWarnings, moodIds = [], tropeIds = [], genreIds = [] } = reviewData;

        console.log('Creating review for user:', userId, 'book:', bookId);

        // Verify user and book exist
        const [user, book] = await Promise.all([
            this.prisma.user.findUnique({ where: { id: parseInt(userId) } }),
            this.prisma.book.findUnique({ where: { id: parseInt(bookId) } })
        ]);

        if (!user) throw new Error('User not found');
        if (!book) throw new Error('Book not found');

        // Check if user already reviewed this book
        const existingReview = await this.prisma.review.findFirst({
            where: {
                userId: parseInt(userId),
                bookId: parseInt(bookId)
            }
        });

        if (existingReview) {
            throw new Error('User has already reviewed this book');
        }

        // Validate mood, trope, and genre IDs
        const [moods, tropes, genres] = await Promise.all([
            moodIds.length > 0 ? this.prisma.mood.findMany({
                where: { id: { in: moodIds.map(id => parseInt(id)) } }
            }) : [],
            tropeIds.length > 0 ? this.prisma.trope.findMany({
                where: { id: { in: tropeIds.map(id => parseInt(id)) } }
            }) : [],
            genreIds.length > 0 ? this.prisma.genre.findMany({
                where: { id: { in: genreIds.map(id => parseInt(id)) } }
            }) : []
        ]);

        if (moodIds.length > 0 && moods.length !== moodIds.length) {
            throw new Error('One or more mood IDs are invalid');
        }
        if (tropeIds.length > 0 && tropes.length !== tropeIds.length) {
            throw new Error('One or more trope IDs are invalid');
        }
        if (genreIds.length > 0 && genres.length !== genreIds.length) {
            throw new Error('One or more genre IDs are invalid');
        }

        // Find or create the Read folder
        let readFolder = await this.prisma.library.findFirst({
            where: {
                userId: parseInt(userId),
                name: 'Read'
            }
        });

        if (!readFolder) {
            console.log('Creating Read folder for user:', userId);
            readFolder = await this.prisma.library.create({
                data: {
                    name: 'Read',
                    type: 'READ',
                    userId: parseInt(userId)
                }
            });
        }

        console.log('Using Read folder:', readFolder.id);

        // Create the review and add book to Read folder in a transaction
        const review = await this.prisma.$transaction(async (prisma) => {
            const newReview = await prisma.review.create({
                data: {
                    userId: parseInt(userId),
                    bookId: parseInt(bookId),
                    rating: parseFloat(rating),
                    text,
                    pace,
                    focus,
                    lovable,
                    contentWarnings,
                    moods: {
                        connect: moodIds.map(id => ({ id: parseInt(id) }))
                    },
                    tropes: {
                        connect: tropeIds.map(id => ({ id: parseInt(id) }))
                    },
                    genres: {
                        connect: genreIds.map(id => ({ id: parseInt(id) }))
                    }
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true
                        }
                    },
                    book: {
                        select: {
                            id: true,
                            title: true,
                            author: true
                        }
                    },
                    moods: true,
                    tropes: true,
                    genres: true
                }
            });

            // Add book to Read folder if not already there
            const existingEntry = await prisma.libraryEntry.findFirst({
                where: {
                    libraryId: readFolder.id,
                    bookId: parseInt(bookId)
                }
            });

            if (!existingEntry) {
                await prisma.libraryEntry.create({
                    data: {
                        libraryId: readFolder.id,
                        bookId: parseInt(bookId)
                    }
                });
            }

            return newReview;
        });

        // Update book's average rating and review count
        await this.updateBookRatingStats(parseInt(bookId));

        return review;
    }

    async updateReview(id, reviewData) {
        const { rating, text, pace, focus, lovable, contentWarnings, moodIds, tropeIds, genreIds } = reviewData;

        const existingReview = await this.prisma.review.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingReview) {
            throw new Error('Review not found');
        }

        const updateData = {};
        if (rating !== undefined) updateData.rating = parseFloat(rating);
        if (text !== undefined) updateData.text = text;
        if (pace !== undefined) updateData.pace = pace;
        if (focus !== undefined) updateData.focus = focus;
        if (lovable !== undefined) updateData.lovable = lovable;
        if (contentWarnings !== undefined) updateData.contentWarnings = contentWarnings;

        // Handle mood, trope, and genre updates
        if (moodIds !== undefined) {
            updateData.moods = {
                set: moodIds.map(id => ({ id: parseInt(id) }))
            };
        }
        if (tropeIds !== undefined) {
            updateData.tropes = {
                set: tropeIds.map(id => ({ id: parseInt(id) }))
            };
        }
        if (genreIds !== undefined) {
            updateData.genres = {
                set: genreIds.map(id => ({ id: parseInt(id) }))
            };
        }

        const review = await this.prisma.review.update({
            where: { id: parseInt(id) },
            data: updateData,
            include: {
                user: {
                    select: {
                        id: true,
                        username: true
                    }
                },
                book: {
                    select: {
                        id: true,
                        title: true,
                        author: true
                    }
                },
                moods: true,
                tropes: true,
                genres: true
            }
        });

        // Update book's rating stats if rating changed
        if (rating !== undefined) {
            await this.updateBookRatingStats(existingReview.bookId);
        }

        return review;
    }

    async deleteReview(id) {
        const existingReview = await this.prisma.review.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingReview) {
            throw new Error('Review not found');
        }

        await this.prisma.review.delete({
            where: { id: parseInt(id) }
        });

        // Update book's rating stats
        await this.updateBookRatingStats(existingReview.bookId);

        return { message: 'Review deleted successfully' };

    }

    async getReviewsByUser(userId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const [reviews, total] = await Promise.all([
            this.prisma.review.findMany({
                where: { userId: parseInt(userId) },
                skip,
                take: parseInt(limit),
                include: {
                    book: {
                        select: {
                            id: true,
                            title: true,
                            author: true
                        }
                    }
                }
            }),
            this.prisma.review.count({
                where: { userId: parseInt(userId) }
            })
        ]);

        return { reviews, total };
    }

    async getReviewsByBook(bookId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        const [reviews, total] = await Promise.all([
            this.prisma.review.findMany({
                where: { bookId: parseInt(bookId) },
                skip,
                take: parseInt(limit),
                include: {
                    user: {
                        select: {
                            id: true,
                            username: true
                        }
                    }
                }
            }),
            this.prisma.review.count({
                where: { bookId: parseInt(bookId) }
            })
        ]);

        return { reviews, total };
    }

    async getReviewOptions() {
        const [moods, tropes, genres] = await Promise.all([
            this.prisma.mood.findMany(),
            this.prisma.trope.findMany(),
            this.prisma.genre.findMany()
        ]);

        return { moods, tropes, genres };
    }

    async updateBookRatingStats(bookId) {
        // Get all reviews for the book
        const reviews = await this.prisma.review.findMany({
            where: { bookId: parseInt(bookId) }
        });

        // Calculate average rating and review count
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = reviews.length > 0 ? totalRating / reviews.length : null;
        const reviewCount = reviews.length;

        // Update book with new stats
        await this.prisma.book.update({
            where: { id: parseInt(bookId) },
            data: {
                averageRating,
                reviewCount
            }
        });
    }
}

module.exports = ReviewService;