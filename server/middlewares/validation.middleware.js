const { validationError } = require("../../config/constants/errors.constant");

const isValidDate = (dateString) => {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false;
  var d = new Date(dateString);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false;
  return d.toISOString().slice(0, 10) === dateString;
};

const validateGetRates = (req, res, next) => {
  if (req.query.date) {
    isValid = isValidDate(req.query.date);
    if (!isValid) return next(validationError("Invalid date, please use YYYY-MM-DD"));
  }
  next();
};

module.exports = { validateGetRates };
