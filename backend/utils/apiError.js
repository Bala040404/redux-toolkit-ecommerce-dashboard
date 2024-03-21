class ApiError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
    this.success = false;
  }
}

export default ApiError;
