const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Handle specific error types
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            error: 'Validation Error',
            details: err.message
        });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            error: 'Unauthorized',
            message: 'Invalid or missing authentication token'
        });
    }

    if (err.name === 'ForbiddenError') {
        return res.status(403).json({
            error: 'Forbidden',
            message: 'You do not have permission to perform this action'
        });
    }

    if (err.name === 'NotFoundError') {
        return res.status(404).json({
            error: 'Not Found',
            message: err.message || 'The requested resource was not found'
        });
    }

    // Handle Prisma errors
    if (err.code === 'P2002') {
        return res.status(409).json({
            error: 'Conflict',
            message: 'A record with this value already exists'
        });
    }

    if (err.code === 'P2025') {
        return res.status(404).json({
            error: 'Not Found',
            message: 'The requested record was not found'
        });
    }

    // Default error
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
};

module.exports = errorHandler;