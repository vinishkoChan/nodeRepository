class AlredyExistError extends Error {
  constructor(message) {
    super(message);
    this.name = "AlredyExistError";
    this.status = 500;
  }
}

module.exports = AlredyExistError;
