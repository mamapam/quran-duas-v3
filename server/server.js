require('dotenv').config();
const express = require('express');
const quranapi = require('./api-data');

const app = express();

quranapi().then((data) => console.log(data));

// console.log(quranapi);

app.listen(5000);
