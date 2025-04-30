import ApiError from "./ApiErro";

class ConflictError extends ApiError {
    constructor(message: string = 'Resource already exists') {
    super(409, message);
    }
}

export default ConflictError;