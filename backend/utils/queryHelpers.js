const buildWhereClause = (filters) => {
    const { search, minRating, maxRating, minPages, maxPages, language } = filters;
    const where = {};

    if (search && search.trim()) {
        where.OR = [
            {
                title: {
                    contains: search.trim(),
                    mode: 'insensitive'
                }
            },
            {
                author: {
                    contains: search.trim(),
                    mode: 'insensitive'
                }
            }
        ];
    }

    if (minRating !== undefined || maxRating !== undefined) {
        where.averageRating = {};
        if (minRating !== undefined) where.averageRating.gte = minRating;
        if (maxRating !== undefined) where.averageRating.lte = maxRating;
    }

    if (minPages !== undefined || maxPages !== undefined) {
        where.pages = {};
        if (minPages !== undefined) where.pages.gte = minPages;
        if (maxPages !== undefined) where.pages.lte = maxPages;
    }

    if (language && language.trim()) {
        where.language = {
            equals: language.trim(),
            mode: 'insensitive'
        };
    }

    return where;
};

const buildOrderBy = (sortBy, sortOrder = 'desc') => {
    const validSortFields = ['title', 'author', 'publishDate', 'averageRating', 'pages', 'reviewCount'];
    const validSortOrders = ['asc', 'desc'];

    if (!validSortFields.includes(sortBy)) {
        return { id: 'desc' };
    }

    if (!validSortOrders.includes(sortOrder.toLowerCase())) {
        sortOrder = 'desc';
    }

    return { [sortBy]: sortOrder.toLowerCase() };
};

const validatePagination = (page, limit) => {
    const validatedPage = Math.max(1, parseInt(page) || 1);
    const validatedLimit = Math.min(100, Math.max(1, parseInt(limit) || 10)); // max 100 items per page

    return {
        page: validatedPage,
        limit: validatedLimit
    };
};

module.exports = {
    buildWhereClause,
    buildOrderBy,
    validatePagination
};