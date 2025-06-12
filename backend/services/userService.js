const bcrypt = require('bcrypt');

class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getAllUsers(page = 1, limit = 10, search = '') {
        const skip = (page - 1) * limit;
        
        const where = search ? {
            OR: [
                { username: { contains: search, mode: 'insensitive' } },
                { email: { contains: search, mode: 'insensitive' } }
            ]
        } : {};

        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: parseInt(limit),
                select: {
                    id: true,
                    username: true,
                    email: true,
                    createdAt: true,
                    _count: {
                        select: {
                            reviews: true,
                            libraries: true,
                            challenges: true,
                            friends: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            }),
            this.prisma.user.count({ where })
        ]);

        return {
            users,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }

    async searchByUsername(username) {
        if (!username) {
            throw new Error('Username is required');
        }

        console.log('Searching for username:', username);

        const users = await this.prisma.user.findMany({
            where: {
                username: {
                    contains: username,
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true
            },
            take: 10,
            orderBy: { username: 'asc' }
        });

        console.log('Search results:', users);
        return users;
    }

    async getUserById(id) {
        console.log('getUserById - id:', id);
        const user = await this.prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true,
                reviews: {
                    select: {
                        id: true,
                        rating: true,
                        text: true,
                        createdAt: true,
                        book: {
                            select: {
                                id: true,
                                title: true,
                                author: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 5
                },
                libraries: {
                    select: {
                        id: true,
                        name: true,
                        type: true,
                        _count: {
                            select: {
                                entries: true
                            }
                        }
                    }
                },
                challenges: {
                    select: {
                        id: true,
                        name: true,
                        startDate: true,
                        endDate: true,
                        goal: true,
                        completed: true
                    },
                    orderBy: {
                        startDate: 'desc'
                    }
                },
                _count: {
                    select: {
                        reviews: true,
                        libraries: true,
                        challenges: true,
                        friends: true
                    }
                }
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    async createUser(userData) {
        const { username, email, password } = userData;

        // Check if user already exists
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { username },
                    { email }
                ]
            }
        });

        if (existingUser) {
            throw new Error('User with this username or email already exists');
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return await this.prisma.$transaction(async (prisma) => {
            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword
                },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    createdAt: true
                }
            });

            const defaultLibraries = [
                { name: 'Want to Read', type: 'WANT_TO_READ' },
                { name: 'Currently Reading', type: 'CURRENTLY_READING' },
                { name: 'Read', type: 'READ' }
            ];

            await Promise.all(
                defaultLibraries.map(library =>
                    prisma.library.create({
                        data: {
                            name: library.name,
                            type: library.type,
                            userId: newUser.id
                        }
                    })
                )
            );

            return newUser;
        });
    }

    async updateUser(id, userData) {
        const { username, email, password } = userData;
        
        // Check if user exists
        const existingUser = await this.prisma.user.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingUser) {
            throw new Error('User not found');
        }

        // Check for conflicts with other users
        if (username || email) {
            const conflictUser = await this.prisma.user.findFirst({
                where: {
                    AND: [
                        { id: { not: parseInt(id) } },
                        {
                            OR: [
                                username ? { username } : {},
                                email ? { email } : {}
                            ].filter(obj => Object.keys(obj).length > 0)
                        }
                    ]
                }
            });

            if (conflictUser) {
                throw new Error('Username or email already taken by another user');
            }
        }

        const updateData = {};
        if (username) updateData.username = username;
        if (email) updateData.email = email;
        if (password) {
            const saltRounds = 10;
            updateData.password = await bcrypt.hash(password, saltRounds);
        }

        const user = await this.prisma.user.update({
            where: { id: parseInt(id) },
            data: updateData,
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true
            }
        });

        return user;
    }

    async deleteUser(id) {
        // Check if user exists
        const existingUser = await this.prisma.user.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingUser) {
            throw new Error('User not found');
        }

        // Delete user (this will cascade delete related records based on your schema)
        await this.prisma.user.delete({
            where: { id: parseInt(id) }
        });

        return { message: 'User deleted successfully' };
    }

    async getUserStats(id) {
        const user = await this.prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                username: true,
                _count: {
                    select: {
                        reviews: true,
                        libraries: true,
                        challenges: true,
                        friends: true
                    }
                }
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Get reading stats
        const [reviewStats, challengeStats] = await Promise.all([
            this.prisma.review.aggregate({
                where: { userId: parseInt(id) },
                _avg: { rating: true },
                _count: { rating: true }
            }),
            this.prisma.readingChallenge.findMany({
                where: { userId: parseInt(id) },
                select: {
                    year: true,
                    goal: true,
                    completed: true
                }
            })
        ]);

        return {
            user: {
                id: user.id,
                username: user.username
            },
            stats: {
                totalReviews: user._count.reviews,
                averageRating: reviewStats._avg.rating || 0,
                totalLibraries: user._count.libraries,
                totalChallenges: user._count.challenges,
                totalFriends: user._count.friends,
                challenges: challengeStats
            }
        };
    }

    async getUserReviews(userId) {
        const reviews = await this.prisma.review.findMany({
            where: { userId: parseInt(userId) },
            include: {
                book: {
                    select: {
                        id: true,
                        title: true,
                        author: true,
                        coverUrl: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        return reviews;
    }
}

module.exports = UserService;