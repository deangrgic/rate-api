const config = require("./config");
const app = require("./config/express.config");
const httpServer = require("http").createServer(app);
const port = process.env.PORT;

// Start server.
async function startup() {
  httpServer.listen(port, () => {
    console.log(`${process.env.APP_NAME} running on port ${port}.`);
  });
}

startup();

// Expose app
module.exports.expressApp = app;
module.exports.server = httpServer;
