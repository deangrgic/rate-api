const { getTokensListingCoinlayer } = require("./coinlayer.repository");
const { getTokensListingCoinMarketCap } = require("./coinmarketcap.repository");

//import new provider and add to array
const getFeedProviders = [getTokensListingCoinlayer, getTokensListingCoinMarketCap];

module.exports = {
  getFeedProviders,
};
