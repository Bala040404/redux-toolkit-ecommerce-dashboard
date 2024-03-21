class ApiResponse {
  constructor(data, message, status) {
    this.payload = data;
    this.message = message;
    this.status = status;
    this.success = true;
  }
}

export default ApiResponse;
