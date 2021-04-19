const axios = require('axios');
const config = require('./config');

const instance = axios.create({
  baseURL: config.quranAPI,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

module.exports = instance;
