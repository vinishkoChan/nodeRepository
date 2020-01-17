class UpdateError extends Error {
  constructor(message) {
    super(message);
    this.name = "UpdateError";
    this.status = 400;
  }
}

module.exports = UpdateError;
