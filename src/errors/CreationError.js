class CreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CreationError";
    this.status = 500;
  }
}

module.exports = CreationError;
