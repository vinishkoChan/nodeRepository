class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthorizationError";
    this.status = 500;
  }
}

module.exports = AuthorizationError;
