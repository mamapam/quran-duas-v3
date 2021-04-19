const express = require('express');
const quran = require('../controllers/quran');

const router = express.Router();

router.get('/quran', quran.getData);

module.exports = router;
