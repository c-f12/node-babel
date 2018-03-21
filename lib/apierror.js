const httpStatus = require('http-status');

class ExtendableError extends Error {
    constructor(message, status) {
        //super llama a su constructor -> new Error
        super(message);
        this.message = message;
        this.status = status;

        // Cuando recibamos un error y poder distingirlo
        Error.captureStackTrace(this, this.constructor.name);
    }
}

class APIError extends ExtendableError {
    constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR) {
        super(message, status);
    }
}

module.exports = APIError;