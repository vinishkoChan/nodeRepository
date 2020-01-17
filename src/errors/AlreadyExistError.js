class AlredyExistError extends Error {
  constructor(message) {
    super(message);
    this.name = "AlredyExistError";
    this.status = 400;
  }
}

module.exports = AlredyExistError;
