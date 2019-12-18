class UpdateError extends Error {
  constructor(message) {
    super(message);
    this.name = "UpdateError";
    this.status = 500;
  }
}

module.exports = UpdateError;
