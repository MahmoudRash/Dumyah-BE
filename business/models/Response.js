class Response {
  constructor(
    statusCode = null,
    data = {},
    error = {},
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.error = error;
  }
}

module.exports = Response;
