const DailyRotateFile = require('winston-daily-rotate-file');
const { format } = require('winston');

const { LOGGER_CONSTANTS } = require('./../constants/env-constants');
const { DATE_FORMAT, MAX_LOG_FILE_SIZE } = require('./../constants/loggerConstants');

const { combine } = format;

const createLevelFilter = (level) => format((log) => {
  return log.level === level ? log : false;
});

const createLogTransportConfig = (logLevel) => ({
  datePattern: DATE_FORMAT,
  dirname: LOGGER_CONSTANTS.LOG_DIRECTORY_PATH,
  filename: `${logLevel}-%DATE%.log`,
  level: logLevel,
  zippedArchive: true,
  maxSize: `${MAX_LOG_FILE_SIZE}m`,
  maxFiles: `${LOGGER_CONSTANTS.LOG_RETENTION_DAYS}d`,
  format: combine(
    createLevelFilter(logLevel)(),
  ),
});

const createDailyRotateFileTransport = (logLevel) => {
  return new DailyRotateFile(createLogTransportConfig(logLevel));
};

const buildCustomError = async(statusCode, logError, clientErr, clientMsg) => {
  const error = new Error(logError);
  error.status = statusCode,
  error.clientErr  = clientErr
  error.clientMsg  = clientMsg
  return error;
}

module.exports = {
  createLogTransportConfig,
  createDailyRotateFileTransport,
  buildCustomError
};
