class IncorrectDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "IncorrectDataError";
    this.status = 400;
  }
}

module.exports = IncorrectDataError;
