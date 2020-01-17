class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthorizationError";
    this.status = 400;
  }
}

module.exports = AuthorizationError;
