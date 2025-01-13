const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  databaseName: {type: String, required: true, unique: true},
  domain: { type: String, required: true, unique: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
      updatedAt: {
        type: Date,
          default: Date.now
      }
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;