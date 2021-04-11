const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.QURAN_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

module.exports = instance;
