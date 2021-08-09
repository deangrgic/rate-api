const axios = require("axios");

const invokeApi = async (currency, params) => {
  try {
    //Historical avaialable only for paid plans, using latest for testing purpose
    const endpoint = `${process.env.COINMARKETCAP_BASE_URL}/cryptocurrency/quotes/latest?symbol=${currency}`;

    const response = await axios.get(endpoint, {
      headers: { "X-CMC_PRO_API_KEY": `${process.env.COINMARKETCAP_ACCESS_KEY}`, timeout: Number(process.env.API_TIMEOUT) },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(`Error invoking CoinmarketCap API:  ${error.message}`);
  }
};

const mapResponse = (currency, response) => {
  return response.data[currency].quote.USD.price;
};

const getTokensListingCoinMarketCap = async (currency, params) => {
  const apiResponseData = await invokeApi(currency, params);
  return mapResponse(currency, apiResponseData);
};

module.exports = { getTokensListingCoinMarketCap };
