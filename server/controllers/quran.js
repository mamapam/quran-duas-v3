const { promisify } = require('util');
const quranapi = require('../api-data');
const client = require('../helpers/redis-init');
const logger = require('../helpers/logger');

const NAMESPACE = 'QURANCONTROLLER';

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

module.exports.getData = async (req, res) => {
  try {
    const cached = await GET_ASYNC('qurandata');
    if (cached) {
      logger.info(NAMESPACE, 'Using cached data.');
      return res.status(200).json(JSON.parse(cached));
    }

    const response = await quranapi();
    logger.info(NAMESPACE, 'Obtained info from Quran API.');

    await SET_ASYNC('qurandata', JSON.stringify(response));
    logger.info(NAMESPACE, 'Caching Quran API data.');

    return res.status(200).json(response);
  } catch (error) {
    res.send(error);
  }
};
