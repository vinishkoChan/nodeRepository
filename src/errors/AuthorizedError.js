class AuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthorizedError";
    this.status = 400;
  }
}

module.exports = AuthorizedError;
