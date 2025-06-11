const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BookNest API',
      version: '1.0.0',
      description: 'A comprehensive RESTful API for managing books with advanced search and filtering capabilities',
      contact: {
        name: 'API Support',
        email: 'support@bookapi.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      },
      {
        url: 'https://booknest-8vzt.onrender.com',
        description: 'Production server'
      }
    ],
    security: [
      {
        bearerAuth: []
      }
    ],
    tags: [
      {
        name: 'Books',
        description: 'Book management endpoints'
      },
      {
        name: 'Users',
        description: 'User management endpoints'
      },
      {
        name: 'Reviews',
        description: 'Book review endpoints'
      },
      {
        name: 'Libraries',
        description: 'User library management endpoints'
      },
      {
        name: 'General',
        description: 'General API information'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter your JWT token in the format: Bearer <token>'
        }
      },
      schemas: {
        Book: {
          type: 'object',
          required: ['title', 'author', 'pages'],
          properties: {
            id: {
              type: 'integer',
              description: 'Unique identifier for the book',
              example: 1
            },
            title: {
              type: 'string',
              description: 'Title of the book',
              example: 'The Great Gatsby'
            },
            author: {
              type: 'string',
              description: 'Author of the book',
              example: 'F. Scott Fitzgerald'
            },
            publishDate: {
              type: 'string',
              format: 'date-time',
              description: 'Publication date of the book',
              example: '1925-04-10T00:00:00.000Z'
            },
            averageRating: {
              type: 'number',
              format: 'float',
              minimum: 0,
              maximum: 5,
              description: 'Average rating of the book (0-5)',
              example: 4.2
            },
            language: {
              type: 'string',
              description: 'Language of the book',
              example: 'English'
            },
            reviewCount: {
              type: 'integer',
              minimum: 0,
              description: 'Number of reviews for the book',
              example: 150
            },
            pages: {
              type: 'integer',
              minimum: 1,
              description: 'Number of pages in the book',
              example: 180
            },
            description: {
              type: 'string',
              description: 'Description or summary of the book',
              example: 'A classic American novel set in the Jazz Age'
            },
            coverUrl: {
              type: 'string',
              format: 'uri',
              description: 'URL to the book cover image',
              example: 'https://example.com/covers/great-gatsby.jpg'
            }
          }
        },
        BookInput: {
          type: 'object',
          required: ['title', 'author', 'pages'],
          properties: {
            title: {
              type: 'string',
              description: 'Title of the book',
              example: 'The Great Gatsby'
            },
            author: {
              type: 'string',
              description: 'Author of the book',
              example: 'F. Scott Fitzgerald'
            },
            publishDate: {
              type: 'string',
              format: 'date',
              description: 'Publication date of the book',
              example: '1925-04-10'
            },
            averageRating: {
              type: 'number',
              format: 'float',
              minimum: 0,
              maximum: 5,
              description: 'Average rating of the book (0-5)',
              example: 4.2
            },
            language: {
              type: 'string',
              description: 'Language of the book',
              example: 'English'
            },
            reviewCount: {
              type: 'integer',
              minimum: 0,
              description: 'Number of reviews for the book',
              example: 150
            },
            pages: {
              type: 'integer',
              minimum: 1,
              description: 'Number of pages in the book',
              example: 180
            },
            description: {
              type: 'string',
              description: 'Description or summary of the book',
              example: 'A classic American novel set in the Jazz Age'
            },
            coverUrl: {
              type: 'string',
              format: 'uri',
              description: 'URL to the book cover image',
              example: 'https://example.com/covers/great-gatsby.jpg'
            }
          }
        },
        BookUpdate: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'Title of the book',
              example: 'The Great Gatsby - Updated Edition'
            },
            author: {
              type: 'string',
              description: 'Author of the book',
              example: 'F. Scott Fitzgerald'
            },
            publishDate: {
              type: 'string',
              format: 'date',
              description: 'Publication date of the book',
              example: '1925-04-10'
            },
            averageRating: {
              type: 'number',
              format: 'float',
              minimum: 0,
              maximum: 5,
              description: 'Average rating of the book (0-5)',
              example: 4.5
            },
            language: {
              type: 'string',
              description: 'Language of the book',
              example: 'English'
            },
            reviewCount: {
              type: 'integer',
              minimum: 0,
              description: 'Number of reviews for the book',
              example: 200
            },
            pages: {
              type: 'integer',
              minimum: 1,
              description: 'Number of pages in the book',
              example: 180
            },
            description: {
              type: 'string',
              description: 'Description or summary of the book',
              example: 'A classic American novel set in the Jazz Age - Updated description'
            },
            coverUrl: {
              type: 'string',
              format: 'uri',
              description: 'URL to the book cover image',
              example: 'https://example.com/covers/great-gatsby-new.jpg'
            }
          }
        },
        BookWithDetails: {
          allOf: [
            { $ref: '#/components/schemas/Book' },
            {
              type: 'object',
              properties: {
                reviews: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      rating: { type: 'number' },
                      user: {
                        type: 'object',
                        properties: {
                          username: { type: 'string' }
                        }
                      }
                    }
                  }
                },
                _count: {
                  type: 'object',
                  properties: {
                    reviews: { type: 'integer' },
                    inLibraries: { type: 'integer' },
                    inChallenges: { type: 'integer' }
                  }
                }
              }
            }
          ]
        },
        BooksResponse: {
          type: 'object',
          properties: {
            books: {
              type: 'array',
              items: { $ref: '#/components/schemas/BookWithDetails' }
            },
            pagination: {
              type: 'object',
              properties: {
                currentPage: { type: 'integer', example: 1 },
                totalPages: { type: 'integer', example: 10 },
                totalBooks: { type: 'integer', example: 95 },
                hasNext: { type: 'boolean', example: true },
                hasPrev: { type: 'boolean', example: false }
              }
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
              example: 'Book not found'
            },
            details: {
              type: 'string',
              description: 'Additional error details',
              example: 'The requested resource does not exist'
            }
          }
        },
        Success: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Success message',
              example: 'Book deleted successfully'
            }
          }
        }
      },
      parameters: {
        BookId: {
          name: 'id',
          in: 'path',
          required: true,
          description: 'Book ID',
          schema: {
            type: 'integer',
            example: 1
          }
        },
        Search: {
          name: 'search',
          in: 'query',
          description: 'Search term to find in book title or author',
          schema: {
            type: 'string',
            example: 'gatsby'
          }
        },
        MinRating: {
          name: 'minRating',
          in: 'query',
          description: 'Minimum average rating filter',
          schema: {
            type: 'number',
            minimum: 0,
            maximum: 5,
            example: 4.0
          }
        },
        MaxRating: {
          name: 'maxRating',
          in: 'query',
          description: 'Maximum average rating filter',
          schema: {
            type: 'number',
            minimum: 0,
            maximum: 5,
            example: 5.0
          }
        },
        MinPages: {
          name: 'minPages',
          in: 'query',
          description: 'Minimum page count filter',
          schema: {
            type: 'integer',
            minimum: 1,
            example: 100
          }
        },
        MaxPages: {
          name: 'maxPages',
          in: 'query',
          description: 'Maximum page count filter',
          schema: {
            type: 'integer',
            minimum: 1,
            example: 500
          }
        },
        Language: {
          name: 'language',
          in: 'query',
          description: 'Filter by book language',
          schema: {
            type: 'string',
            example: 'English'
          }
        },
        Page: {
          name: 'page',
          in: 'query',
          description: 'Page number for pagination',
          schema: {
            type: 'integer',
            minimum: 1,
            default: 1,
            example: 1
          }
        },
        Limit: {
          name: 'limit',
          in: 'query',
          description: 'Number of items per page',
          schema: {
            type: 'integer',
            minimum: 1,
            maximum: 100,
            default: 10,
            example: 10
          }
        }
      }
    }
  },
  apis: [
    './routes/*.js',
    './index.js'
  ]
};

// Add error handling for swagger-jsdoc
let specs;
try {
  specs = swaggerJsdoc(options);
  console.log('Swagger documentation generated successfully');
} catch (error) {
  console.error('Error generating Swagger documentation:', error.message);
  console.error('Error details:', error);
  
  // Create a minimal fallback spec
  specs = {
    openapi: '3.0.0',
    info: {
      title: 'BookNest API',
      version: '1.0.0',
      description: 'API documentation temporarily unavailable due to parsing error'
    },
    paths: {
      '/health': {
        get: {
          summary: 'Health check',
          responses: {
            '200': {
              description: 'API is running'
            }
          }
        }
      }
    }
  };
}

module.exports = {
  specs,
  swaggerUi
};