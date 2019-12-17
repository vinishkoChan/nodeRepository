class UpdateError extends Error {
  constructor(message) {
    super(message);
    this.name = "UpdateError";
    this.status = 101;
  }
}

module.exports = UpdateError;
