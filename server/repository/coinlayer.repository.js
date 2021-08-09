const axios = require("axios");

const invokeApi = async (currency, params) => {
  try {
    let endpoint = params.date
      ? `${process.env.COINLAYER_BASE_URL}/${params.date}?symbols=${currency}`
      : `${process.env.COINLAYER_BASE_URL}/live?symbols=${currency}`;

    //timeout set in case that service is inresponsible, which could impact application performance
    const response = await axios.get(`${endpoint}&access_key=${process.env.COINLAYER_ACCESS_KEY}`, { timeout: Number(process.env.API_TIMEOUT) });
    //API returns 200 OK with error message in case of error, handling those cases with rejection
    if (response.data.success === false) return Promise.reject(`Error invoking Coinlayer API:  ${response.data.error.info}`);
    return response.data.rates;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const mapResponse = (response) => {
  return response[Object.keys(response)[0]];
};

const getTokensListingCoinlayer = async (currency, params) => {
  const apiResponseData = await invokeApi(currency, params);
  return mapResponse(apiResponseData);
};

module.exports = { getTokensListingCoinlayer };
