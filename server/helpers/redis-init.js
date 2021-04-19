const redis = require('redis');
const logger = require('./logger');

const NAMESPACE = 'REDIS';

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

client.on('connect', () => {
  logger.info(NAMESPACE, 'Client connected to redis.');
});

client.on('ready', () => {
  logger.info(NAMESPACE, 'Client connected to redis and ready to use.');
});

client.on('error', (err) => {
  logger.error(NAMESPACE, `Redis Error: ${err}`);
});

client.on('end', () => {
  logger.info(NAMESPACE, 'Client disconnected from redis.');
});

process.on('SIGINT', () => {
  client.quit();
});

module.exports = client;
