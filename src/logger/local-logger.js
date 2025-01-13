const { createLogger, format, transports } = require('winston');
const { createDailyRotateFileTransport } = require('../utils/logger');
const { LOGGER_CONSTANTS } = require('./../constants/env-constants');
const { LOG_LEVELS, LOG_LEVELS_GENERIC, DATE_TIME_FORMAT } = require('./../constants/loggerConstants');

const { combine, timestamp, printf, align } = format;

const logFormat = () => printf(({ level, message, stack, timestamp, correlationId }) => {
  return `${timestamp} [${level}] ${correlationId ?? ''} ${message} ${stack ?? ''}`;
});

const apilogger = () => {
  return createLogger({
    level: LOGGER_CONSTANTS.LOG_LEVEL ?? LOG_LEVELS.debug,
    format: combine(
      format.errors({ stack: true }),
      timestamp({
        format: DATE_TIME_FORMAT,
      }),
      align(),
      logFormat(),
    ),
    defaultMeta: { service: 'api' },
    transports: [
      new transports.Console(),
      createDailyRotateFileTransport(LOG_LEVELS.error),
      createDailyRotateFileTransport(LOG_LEVELS.info),
      createDailyRotateFileTransport(LOG_LEVELS.debug),
      createDailyRotateFileTransport(LOG_LEVELS_GENERIC.combined),
    ],
    exceptionHandlers: [
      createDailyRotateFileTransport(LOG_LEVELS_GENERIC.exception),
    ],
    rejectionHandlers: [
      createDailyRotateFileTransport(LOG_LEVELS_GENERIC.rejections),
    ],
  });
}

module.exports = apilogger
