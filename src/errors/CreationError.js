class CreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CreationError";
    this.status = 400;
  }
}

module.exports = CreationError;
