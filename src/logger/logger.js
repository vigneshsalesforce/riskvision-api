const winston = require('winston');
const newrelicFormatter = require('@newrelic/winston-enricher')(winston);

const { createDailyRotateFileTransport } = require('../utils/logger');
const { LOGGER_CONSTANTS, IS_DEV_ONLY } = require('../constants/env-constants');
const { LOG_LEVELS, LOG_LEVELS_GENERIC, DATE_TIME_FORMAT } = require('../constants/loggerConstants');

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;

const consoleLogFormat = () => printf(({ level, message, stack, timestamp, correlationId }) => {
  return `${timestamp} [${level}] ${correlationId ?? ''} ${message} ${stack ?? ''}`;
});

const getConsoleTransport = () => {
  return new transports.Console({
    format: combine(
      timestamp({
        format: DATE_TIME_FORMAT,
      }),
      consoleLogFormat(),
    ),
  });
}

const createLoggerInstance = (logLevel) => {
  const transports = [
    createDailyRotateFileTransport(LOG_LEVELS.error),
    createDailyRotateFileTransport(LOG_LEVELS.info),
    createDailyRotateFileTransport(LOG_LEVELS.debug),
    createDailyRotateFileTransport(LOG_LEVELS.warn),
    createDailyRotateFileTransport(LOG_LEVELS_GENERIC.combined)
  ];
  const exceptionHandlers = [
    createDailyRotateFileTransport(LOG_LEVELS_GENERIC.exception)
  ];
  const rejectionHandlers = [
    createDailyRotateFileTransport(LOG_LEVELS_GENERIC.rejections)
  ];
  
  if (IS_DEV_ONLY) {
    const consoleTransport = getConsoleTransport();
    transports.push(consoleTransport);
    exceptionHandlers.push(consoleTransport);
    rejectionHandlers.push(consoleTransport);
  }

  return createLogger({
    level: LOGGER_CONSTANTS.LOG_LEVEL ?? logLevel,
    format: combine(
      format.errors({ stack: true }),
      timestamp({
        format: DATE_TIME_FORMAT,
      }),
      newrelicFormatter(),
    ),
    defaultMeta: { service: 'api' },
    transports,
    exceptionHandlers,
    rejectionHandlers,
  });
}

module.exports = createLoggerInstance;
