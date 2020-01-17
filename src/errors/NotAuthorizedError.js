class NotAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotAuthorizedError";
    this.status = 400;
  }
}

module.exports = NotAuthorizedError;
