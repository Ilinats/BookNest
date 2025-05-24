class ApiResponse {
  constructor(success, data = null, message = null, error = null, metadata = null) {
    this.success = success;
    this.timestamp = new Date().toISOString();
    
    if (data !== null) {
      this.data = data;
    }
    
    if (message) {
      this.message = message;
    }
    
    if (error) {
      this.error = error;
    }
    
    if (metadata) {
      this.metadata = metadata;
    }
  }

  static success(data, message = null, metadata = null) {
    return new ApiResponse(true, data, message, null, metadata);
  }

  static created(data, message = 'Resource created successfully') {
    return new ApiResponse(true, data, message);
  }

  static updated(data, message = 'Resource updated successfully') {
    return new ApiResponse(true, data, message);
  }

  static deleted(message = 'Resource deleted successfully') {
    return new ApiResponse(true, null, message);
  }

  static error(error, message = null) {
    const errorMessage = error?.message || error || 'An error occurred';
    return new ApiResponse(false, null, message, errorMessage);
  }

  static validationError(errors, message = 'Validation failed') {
    return new ApiResponse(false, null, message, errors);
  }

  static notFound(resource = 'Resource', message = null) {
    const defaultMessage = `${resource} not found`;
    return new ApiResponse(false, null, message || defaultMessage, defaultMessage);
  }

  static unauthorized(message = 'Unauthorized access') {
    return new ApiResponse(false, null, message, 'Authentication required');
  }

  static forbidden(message = 'Access forbidden') {
    return new ApiResponse(false, null, message, 'Insufficient permissions');
  }

  static conflict(message = 'Resource conflict') {
    return new ApiResponse(false, null, message, 'Resource already exists or conflicts with existing data');
  }

  static serverError(message = 'Internal server error') {
    return new ApiResponse(false, null, message, 'An unexpected error occurred');
  }

  static paginated(data, pagination, message = null) {
    const metadata = {
      pagination: {
        currentPage: pagination.currentPage,
        totalPages: pagination.totalPages,
        totalItems: pagination.totalItems,
        itemsPerPage: pagination.itemsPerPage,
        hasNextPage: pagination.currentPage < pagination.totalPages,
        hasPreviousPage: pagination.currentPage > 1
      }
    };
    
    return new ApiResponse(true, data, message, null, metadata);
  }

  toJSON() {
    const response = {
      success: this.success,
      timestamp: this.timestamp
    };

    if (this.data !== undefined) {
      response.data = this.data;
    }

    if (this.message) {
      response.message = this.message;
    }

    if (this.error) {
      response.error = this.error;
    }

    if (this.metadata) {
      response.metadata = this.metadata;
    }

    return response;
  }

  getStatusCode() {
    if (this.success) {
      if (this.message && this.message.includes('created')) {
        return 201;
      }
      return 200;
    }

    if (this.error) {
      if (this.error.includes('not found') || this.message?.includes('not found')) {
        return 404;
      }
      
      if (this.error.includes('Validation failed') || this.message?.includes('Validation failed')) {
        return 400;
      }
      
      if (this.error.includes('already exists') || this.message?.includes('conflict')) {
        return 409;
      }
      
      if (this.error.includes('Unauthorized') || this.message?.includes('Unauthorized')) {
        return 401;
      }
      
      if (this.error.includes('forbidden') || this.message?.includes('forbidden')) {
        return 403;
      }
    }

    return 500;
  }
}

module.exports = ApiResponse;