const UserService = require('../services/userService');

class UserController {
    constructor() {
        this.userService = null;
    }

    initializeService(prisma) {
        this.userService = new UserService(prisma);
    }

    getAllUsers = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const { page, limit, search } = req.query;
            const result = await this.userService.getAllUsers(page, limit, search);
            
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    };

    getUserById = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid user ID'
                });
            }

            const user = await this.userService.getUserById(id);
            
            res.status(200).json({
                success: true,
                data: user
            });
        } catch (error) {
            next(error);
        }
    };

    createUser = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const user = await this.userService.createUser(req.body);
            
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    };

    updateUser = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const { id } = req.params;
            const user = await this.userService.updateUser(id, req.body);
            
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    };

    deleteUser = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const { id } = req.params;
            const result = await this.userService.deleteUser(id);
            
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    };

    getUserStats = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const { id } = req.params;
            const stats = await this.userService.getUserStats(id);
            
            res.status(200).json({
                success: true,
                data: stats
            });
        } catch (error) {
            next(error);
        }
    };

    getProfile = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            console.log('getProfile - req.user:', req.user);
            const userId = parseInt(req.user.userId);
            console.log('getProfile - parsed userId:', userId);

            if (isNaN(userId)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid user ID'
                });
            }

            const user = await this.userService.getUserById(userId);
            
            res.status(200).json({
                success: true,
                data: user
            });
        } catch (error) {
            console.error('getProfile error:', error);
            next(error);
        }
    };

    getUserReviews = async (req, res, next) => {
        try {
            if (!this.userService) {
                this.initializeService(req.prisma);
            }

            const userId = parseInt(req.user.userId);
            if (isNaN(userId)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid user ID'
                });
            }

            const reviews = await this.userService.getUserReviews(userId);
            
            res.status(200).json({
                success: true,
                data: reviews
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new UserController();