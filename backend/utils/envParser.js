const fs = require("fs");
const path = require("path");
const { parseBuffer } = require("./parse.js");

const getEnv = () => {
  const envFilePath = path.join(__dirname, "../", ".env");
  const bufferEnv = fs.readFileSync(envFilePath);
  const envObject = parseBuffer(bufferEnv);

  Object.keys(envObject || {}).map((key) => {
    if (!process.env[key] && process.env[key] !== envObject[key]) {
      process.env[key] = envObject[key];
    }
  });
};

module.exports = {
  getEnv,
};
