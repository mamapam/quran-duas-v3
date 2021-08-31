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
  origin: [
    'http://localhost:5005',
    'http://localhost:8080',
    'http://localhost:5000',
  ],
  optionsSuccessStatus: 200,
  methods: 'GET',
};

app.use(cors(corsOptions));

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
