class IncorrectDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "IncorrectDataError";
    this.status = 500;
  }
}

module.exports = IncorrectDataError;
