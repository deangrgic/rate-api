const express = require("express");

const routes = require("../server/routes/v1");
const responses = require("../server/responses");

const app = express();

// middlewares
app.use(responses);
app.use("/v1", routes());

module.exports = app;
