const express = require('express');
const cors = require('cors');
const config = require('./helpers/config');
const logger = require('./helpers/logger');
const ExpressError = require('./utils/ExpressError');
require('./helpers/redis-init');
const quranRoutes = require('./routes/quran');

const app = express();

const NAMESPACE = 'SERVER';

const corsOptions = {
  origin: config.client,
};

app.use(cors(corsOptions));

console.log(corsOptions.origin);

app.use('/api', quranRoutes);

app.all('*', (req, res, next) => {
  next(new ExpressError('Route does not exist', 404));
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.statusCode,
    message: err.message,
  });
});

app.listen(config.server.port, () => {
  logger.info(NAMESPACE, `Server started on port ${config.server.port}`);
});
