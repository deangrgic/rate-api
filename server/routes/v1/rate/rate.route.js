const express = require("express");
const { getAssetValue } = require("../../../controllers/rate/rate.controller");
const { validateGetRates } = require("../../../middlewares/validation.middleware");
const router = new express.Router();

router.route("/:currency_id").get(validateGetRates, getAssetValue);

module.exports = router;
