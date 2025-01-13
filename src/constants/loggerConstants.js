const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = `${DATE_FORMAT} hh:mm:ss.SSS A`;
const MAX_LOG_FILE_SIZE = 20;

const LOG_LEVELS = Object.freeze({
  error: 'error',
  info: 'info',
  debug: 'debug',
  warn: 'warn',
});

const LOG_LEVELS_GENERIC = Object.freeze({
  combined: 'combined',
  exception: 'exception',
  rejections: 'rejections',
});

module.exports = {
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  LOG_LEVELS,
  LOG_LEVELS_GENERIC,
  MAX_LOG_FILE_SIZE,
};
