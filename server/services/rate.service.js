const { getFeedProviders } = require("../repository");

const getAssetFeeds = async (currency, params) => {
  try {
    const assetFeeds = await fetchAssetFeeds(currency, params);
    const averageMarketPrice = calculateAverageMarketPrice(assetFeeds);
    return averageMarketPrice;
  } catch (errror) {
    return Promise.reject(error);
  }
};

const fetchAssetFeeds = async (currency, params) => {
  try {
    const promiseList = [];
    for (let provider of getFeedProviders) {
      promiseList.push(provider(currency, params));
    }
    //since it is not critical to have all provider responses used is Promise.allSettled to continue with processing in case promise is rejected
    const result = await Promise.allSettled(promiseList);
    const fulfilledPromiseData = result.filter((p) => p.status === "fulfilled").map((p) => p.value);
    return fulfilledPromiseData;
  } catch (error) {
    return Promise.reject(error);
  }
};

const calculateAverageMarketPrice = (priceFeeds) => {
  return priceFeeds.reduce((p, c) => p + c, 0) / priceFeeds.length;
};

module.exports = { getAssetFeeds };
