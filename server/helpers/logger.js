const fs = require('fs');
const config = require('./config');

const getTimeStamp = () => new Date().toISOString();

const info = (namespace, message, object) => {
  if (object) {
    const logData = `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`;
    console.info(logData, object);
    fs.appendFile(
      `${config.logFile}/trace.log`,
      `${logData}\n, ${object}\n`,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  } else {
    const logData = `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`;
    console.info(logData);
    fs.appendFile(`${config.logFile}/trace.log`, `${logData}\n`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const warn = (namespace, message, object) => {
  if (object) {
    const logData = `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`;
    console.warn(logData, object);
    fs.appendFile(
      `${config.logFile}/trace.log`,
      `${logData}\n, ${object}`,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  } else {
    const logData = `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`;
    console.warn(logData);
    fs.appendFile(`${config.logFile}/trace.log`, `${logData}\n`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const error = (namespace, message, object) => {
  if (object) {
    const logData = `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`;
    console.error(logData, object);
    fs.appendFile(
      `${config.logFile}/trace.log`,
      `${logData}\n, ${object}`,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  } else {
    const logData = `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`;
    console.error(logData);
    fs.appendFile(`${config.logFile}/trace.log`, `${logData}\n`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const debug = (namespace, message, object) => {
  if (object) {
    const logData = `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`;
    console.debug(logData, object);
    fs.appendFile(
      `${config.logFile}/trace.log`,
      `${logData}\n, ${object}`,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  } else {
    const logData = `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`;
    console.debug(logData);
    fs.appendFile(`${config.logFile}/trace.log`, `${logData}\n`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

module.exports = {
  info,
  warn,
  error,
  debug,
};
