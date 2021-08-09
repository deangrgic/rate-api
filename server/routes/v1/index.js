const express = require("express");
const rateRoute = require("./rate/rate.route");

module.exports = () => {
  const router = new express.Router();
  router.use("/rate", rateRoute);

  router.use((err, req, res, next) => {
    switch (err.status) {
      case 404:
        return res.notFound(err);
      case null:
      case undefined:
      case 500:
        return res.serverError(err);
      default:
        return res.badRequest(err);
    }
  });

  return router;
};
