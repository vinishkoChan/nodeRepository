class CreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CreationError";
    this.status = 100;
  }
}

module.exports = CreationError;
