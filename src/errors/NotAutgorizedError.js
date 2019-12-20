class NotAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotAuthorizedError";
    this.status = 500;
  }
}

module.exports = NotAuthorizedError;
