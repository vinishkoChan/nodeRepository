class CreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "DeleteError";
    this.status = 500;
  }
}

module.exports = CreationError;
