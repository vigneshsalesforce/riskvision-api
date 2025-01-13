const createLoggerInstance = require('./logger');
const locallogger = require('./local-logger');
const { IS_DEV_ONLY, IS_PROD } = require('../constants/env-constants');
const { LOG_LEVELS } = require('../constants/loggerConstants');

let logger = null;

if (IS_PROD) {
  logger = createLoggerInstance(LOG_LEVELS.info);
} else if (IS_DEV_ONLY) {
  logger = createLoggerInstance(LOG_LEVELS.debug);
} else {
  logger = locallogger();
}

module.exports = logger;
