const dotenv = require("dotenv");

if (process.env.NODE_ENV) {
  dotenv.config({
    path: `./.env.${process.env.NODE_ENV}`,
  });
} else {
  throw new Error("NODE_ENV must be defined");
}
