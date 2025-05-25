// middleware/validation.js
const validateBook = (req, res, next) => {
    const {
        title,
        author,
        pages,
        averageRating,
        reviewCount
    } = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        return res.status(400).json({ 
            error: 'Title is required and must be a non-empty string' 
        });
    }

    if (!author || typeof author !== 'string' || author.trim().length === 0) {
        return res.status(400).json({ 
            error: 'Author is required and must be a non-empty string' 
        });
    }

    if (!pages || typeof pages !== 'number' || pages <= 0) {
        return res.status(400).json({ 
            error: 'Pages is required and must be a positive number' 
        });
    }

    if (averageRating !== undefined && 
        (typeof averageRating !== 'number' || averageRating < 0 || averageRating > 5)) {
        return res.status(400).json({ 
            error: 'Average rating must be a number between 0 and 5' 
        });
    }

    if (reviewCount !== undefined && 
        (typeof reviewCount !== 'number' || reviewCount < 0)) {
        return res.status(400).json({ 
            error: 'Review count must be a non-negative number' 
        });
    }

    req.body.title = title.trim();
    req.body.author = author.trim();
    if (req.body.language) req.body.language = req.body.language.trim();
    if (req.body.description) req.body.description = req.body.description.trim();

    next();
};

const validateBookUpdate = (req, res, next) => {
    const {
        title,
        author,
        pages,
        averageRating,
        reviewCount
    } = req.body;

    if (title !== undefined && 
        (typeof title !== 'string' || title.trim().length === 0)) {
        return res.status(400).json({ 
            error: 'Title must be a non-empty string' 
        });
    }

    if (author !== undefined && 
        (typeof author !== 'string' || author.trim().length === 0)) {
        return res.status(400).json({ 
            error: 'Author must be a non-empty string' 
        });
    }

    if (pages !== undefined && 
        (typeof pages !== 'number' || pages <= 0)) {
        return res.status(400).json({ 
            error: 'Pages must be a positive number' 
        });
    }

    if (averageRating !== undefined && 
        (typeof averageRating !== 'number' || averageRating < 0 || averageRating > 5)) {
        return res.status(400).json({ 
            error: 'Average rating must be a number between 0 and 5' 
        });
    }

    if (reviewCount !== undefined && 
        (typeof reviewCount !== 'number' || reviewCount < 0)) {
        return res.status(400).json({ 
            error: 'Review count must be a non-negative number' 
        });
    }

    if (req.body.title) req.body.title = req.body.title.trim();
    if (req.body.author) req.body.author = req.body.author.trim();
    if (req.body.language) req.body.language = req.body.language.trim();
    if (req.body.description) req.body.description = req.body.description.trim();

    next();
};

module.exports = {
    validateBook,
    validateBookUpdate
};