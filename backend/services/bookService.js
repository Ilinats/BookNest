const { buildWhereClause } = require('../utils/queryHelpers');

//TODO: moje da se razledi na nqkolko fajla

const getAllBooks = async (prisma, filters) => {
    const { page, limit, ...searchFilters } = filters;
    
    const where = buildWhereClause(searchFilters);
    
    const skip = (page - 1) * limit;
    
    const books = await prisma.book.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
            id: 'desc'
        },
        include: {
            reviews: {
                select: {
                    id: true,
                    rating: true,
                    user: {
                        select: {
                            username: true
                        }
                    }
                }
            },
            _count: {
                select: {
                    reviews: true
                }
            }
        }
    });
    
    const totalBooks = await prisma.book.count({ where });
    
    return {
        books,
        pagination: {
            currentPage: page,
            totalPages: Math.ceil(totalBooks / limit),
            totalBooks,
            hasNext: skip + limit < totalBooks,
            hasPrev: page > 1
        }
    };
};

const getBookById = async (prisma, id) => {
    return await prisma.book.findUnique({
        where: { id },
        include: {
            reviews: {
                include: {
                    user: {
                        select: {
                            username: true
                        }
                    },
                    moods: true,
                    tropes: true,
                    genres: true
                }
            },
            _count: {
                select: {
                    reviews: true,
                    inLibraries: true,
                    inChallenges: true
                }
            }
        }
    });
};

const createBook = async (prisma, bookData) => {
    const {
        title,
        author,
        publishDate,
        averageRating,
        language,
        reviewCount,
        pages,
        description,
        coverUrl
    } = bookData;
    
    return await prisma.book.create({
        data: {
            title,
            author,
            publishDate: publishDate ? new Date(publishDate) : new Date(),
            averageRating: averageRating ? parseFloat(averageRating) : null,
            language,
            reviewCount: reviewCount ? parseInt(reviewCount) : null,
            pages: parseInt(pages),
            description,
            coverUrl
        }
    });
};

const updateBook = async (prisma, id, updateData) => {
    const existingBook = await prisma.book.findUnique({
        where: { id }
    });
    
    if (!existingBook) {
        return null;
    }
    
    const {
        title,
        author,
        publishDate,
        averageRating,
        language,
        reviewCount,
        pages,
        description,
        coverUrl
    } = updateData;
    
    const dataToUpdate = {};
    if (title !== undefined) dataToUpdate.title = title;
    if (author !== undefined) dataToUpdate.author = author;
    if (publishDate !== undefined) dataToUpdate.publishDate = new Date(publishDate);
    if (averageRating !== undefined) dataToUpdate.averageRating = parseFloat(averageRating);
    if (language !== undefined) dataToUpdate.language = language;
    if (reviewCount !== undefined) dataToUpdate.reviewCount = parseInt(reviewCount);
    if (pages !== undefined) dataToUpdate.pages = parseInt(pages);
    if (description !== undefined) dataToUpdate.description = description;
    if (coverUrl !== undefined) dataToUpdate.coverUrl = coverUrl;
    
    return await prisma.book.update({
        where: { id },
        data: dataToUpdate
    });
};

const deleteBook = async (prisma, id) => {
    const existingBook = await prisma.book.findUnique({
        where: { id },
        include: {
            _count: {
                select: {
                    reviews: true,
                    inLibraries: true,
                    inChallenges: true
                }
            }
        }
    });
    
    if (!existingBook) {
        return {
            success: false,
            statusCode: 404,
            message: 'Book not found'
        };
    }
    
    if (existingBook._count.reviews > 0 || 
        existingBook._count.inLibraries > 0 || 
        existingBook._count.inChallenges > 0) {
        return {
            success: false,
            statusCode: 400,
            message: 'Cannot delete book with existing reviews, library entries, or challenge entries. Please remove related data first.'
        };
    }
    
    await prisma.book.delete({
        where: { id }
    });
    
    return { success: true };
};

const getBooksByAuthor = async (prisma, author) => {
    return await prisma.book.findMany({
        where: {
            author: {
                contains: author,
                mode: 'insensitive'
            }
        },
        orderBy: {
            publishDate: 'desc'
        }
    });
};

const getTopRatedBooks = async (prisma, limit) => {
    return await prisma.book.findMany({
        take: limit,
        orderBy: {
            averageRating: 'desc'
        },
        include: {
            _count: {
                select: {
                    reviews: true
                }
            }
        }
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    getBooksByAuthor,
    getTopRatedBooks
};