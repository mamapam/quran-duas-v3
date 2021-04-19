require('dotenv').config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5005;

const SERVER = {
  hostName: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const { QURAN_API } = process.env;

const { LOG_FILE } = process.env;

const config = {
  server: SERVER,
  quranAPI: QURAN_API,
  logFile: LOG_FILE,
};

module.exports = config;
