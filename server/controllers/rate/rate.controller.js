const { getAssetFeeds } = require("../../services/rate.service");

const getAssetValue = async (req, res, next) => {
  try {
    const params = { date: req.query.date };
    const response = await getAssetFeeds(req.params.currency_id, params);
    return res.ok(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAssetValue,
};
