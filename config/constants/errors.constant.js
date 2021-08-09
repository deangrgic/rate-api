module.exports = {
  validationError: (message) => {
    const error = new Error();
    error.status = 400;
    error.message = `Validation error: ${message}.`;
    return error;
  },
};
