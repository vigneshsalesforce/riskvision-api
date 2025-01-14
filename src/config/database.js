const mongoose = require('mongoose');
const config = require('./index');
const Tenant = require('../models/landlord/tenant');
const attachModels = require('../models/tenant/attachModels');
const InitSchema = require('../init/initSchema');

const mongooseOptions = {
  maxPoolSize: 10,
  minPoolSize: 1,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

const tenantConnections = {};

const landlordDbConnection = async () => {
  try {
    await mongoose.connect(config.mongodbUriLandlord, mongooseOptions);
    console.log('Connected to Landlord Database');
  } catch (error) {
    console.error('Error connecting to Landlord Database:', error);
    process.exit(1);
  }
};

const createTenantDbConnection = (dbName) => {
  const tenantDbUri = `${config.mongodbUriLandlord.substring(0, config.mongodbUriLandlord.lastIndexOf('/'))}/${dbName}`;
  return new Promise((resolve, reject) => {
    const tenantDb = mongoose.createConnection(tenantDbUri, mongooseOptions);

    tenantDb.on('connected', () => {
      console.log(`Connected to Tenant Database: ${dbName}`);
      const models = attachModels(tenantDb);
      InitSchema(models, tenantDb); 
      handleDisconnection(tenantDb, dbName);
      resolve({ connection: tenantDb, models });
    });

    tenantDb.on('error', (error) => {
      console.error(`Error connecting to Tenant Database ${dbName}:`, error);
      reject(error);
    });
  });
};

const initializeAllTenants = async () => {
  try {
    const tenants = await Tenant.find();
    if (tenants.length === 0) {
      console.log('No tenants found to initialize.');
      return;
    }

    for (const tenant of tenants) {
      const { connection, models } = await createTenantDbConnection(tenant.databaseName);
      tenantConnections[tenant.databaseName] = { connection, models };
      console.log(`Initialized tenant: ${tenant.domain} (${tenant.databaseName})`);
    }
  } catch (error) {
    console.error('Error initializing tenant databases:', error);
    process.exit(1);
  }
};

const handleDisconnection = (connection, dbName) => {
  connection.on('disconnected', () => {
    console.warn(`Disconnected from Tenant Database: ${dbName}`);
  });

  connection.on('reconnected', () => {
    console.log(`Reconnected to Tenant Database: ${dbName}`);
  });

  connection.on('error', (error) => {
    console.error(`Error in connection to Tenant Database ${dbName}:`, error);
  });
};

const closeConnections = async () => {
  try {
    for (const [dbName, { connection }] of Object.entries(tenantConnections)) {
      await connection.close();
      console.log(`Closed connection to Tenant Database: ${dbName}`);
    }

    await mongoose.connection.close();
    console.log('Closed connection to Landlord Database');
  } catch (error) {
    console.error('Error closing database connections:', error);
  }
};

process.on('SIGINT', async () => {
  await closeConnections();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Closing connections...');
  await closeConnections();
  process.exit(0);
});

module.exports = {
  landlordDbConnection,
  initializeAllTenants,
  createTenantDbConnection,
  tenantConnections,
};