const errorHandler = (error, req, res, next) => {
    console.error('Error:', error);

    if (error.code) {
        switch (error.code) {
            case 'P2002':
                return res.status(400).json({
                    error: 'Unique constraint violation',
                    details: 'A record with this data already exists'
                });
            case 'P2025':
                return res.status(404).json({
                    error: 'Record not found',
                    details: 'The requested resource does not exist'
                });
            case 'P2003':
                return res.status(400).json({
                    error: 'Foreign key constraint violation',
                    details: 'Referenced record does not exist'
                });
            case 'P2014':
                return res.status(400).json({
                    error: 'Invalid data',
                    details: 'The change you are trying to make would violate the required relation'
                });
            default:
                return res.status(500).json({
                    error: 'Database error',
                    details: 'An error occurred while processing your request'
                });
        }
    }

    if (error.name === 'ValidationError') {
        return res.status(400).json({
            error: 'Validation error',
            details: error.message
        });
    }

    res.status(500).json({
        error: 'Internal server error',
        details: 'Something went wrong on our end'
    });
};

module.exports = errorHandler;