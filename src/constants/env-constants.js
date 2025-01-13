/* eslint-disable no-magic-numbers */

const defaults = {
  JWT_EXPIRES_IN: 2629746,
  SA_LOGIN_EXPIRES_IN: 600,
  LOG_RETENTION_DAYS: 3,
};

const NODE_ENV = process.env.NODE_ENV || "local";
const IS_DEVELOPMENT = NODE_ENV === "development" || NODE_ENV === "local";
const IS_PROD = NODE_ENV === "production";
const IS_DEV_ONLY = NODE_ENV === "development";
const IS_LOCAL = NODE_ENV === "local";

const REDIS_URL = process.env.REDIS_URL;

const FRONT_END_DOMAIN = process.env.FRONT_END_DOMAIN || "http://*.localhost:8081";
const FRONT_END_DOMAIN_ONLY = process.env.FRONT_END_DOMAIN_ONLY || "localhost:8081";
const CENTRAL_AUTH_DOMAIN = process.env.CENTRAL_AUTH_DOMAIN || "http://localhost:8080";
const WILDCARD_DOMAIN = process.env.WILDCARD_DOMAIN || "*.localhost:3002";

const WEBHOOK_WILDCARD_DOMAIN = process.env.WEBHOOK_WILDCARD_DOMAIN || "*.localhost:3002";

const JWT = {
  SECRET: process.env.JWT_SECRET || "oNaTICestaBloaNCOnFLanzCATeREthEDRIckLeDwELSIDiveliSMoUsLOGRACeAdjoIlimPOYGNPeVErTiCidyinTIsTOnDOGer",
  EXPIRES_IN: process.env.JWT_EXPIRES_IN || defaults.JWT_EXPIRES_IN,
  SA_LOGIN_EXPIRES_IN: process.env.SA_LOGIN_EXPIRES_IN || defaults.SA_LOGIN_EXPIRES_IN,
};

const LOGGER_CONSTANTS = {
  LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  LOG_RETENTION_DAYS: process.env.LOG_RETENTION_DAYS || defaults.LOG_RETENTION_DAYS,
  LOG_DIRECTORY_PATH: process.env.LOG_DIRECTORY_PATH || "log/portal",
};

const PROTOCOL = process.env.PROTOCOL || "https";

/* AWS Constants */
const AWS_CONSTANTS = {
  DEFAULT_REGION: process.env.AWS_DEFAULT_REGION || "eu-west-2",
};

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';

const MONGO = {
  CONNECTION_STRING: MONGO_CONNECTION_STRING.replace('<dbpassword>', MONGO_PASSWORD),
};

module.exports = {
  NODE_ENV,
  IS_PROD,
  IS_DEVELOPMENT,
  IS_DEV_ONLY,
  FRONT_END_DOMAIN,
  CENTRAL_AUTH_DOMAIN,
  WILDCARD_DOMAIN,
  JWT,
  IS_LOCAL,
  WEBHOOK_WILDCARD_DOMAIN,
  FRONT_END_DOMAIN_ONLY,
  LOGGER_CONSTANTS,
  REDIS_URL,
  PROTOCOL,
  AWS_CONSTANTS,
  MONGO,
};
