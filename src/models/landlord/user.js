const mongoose = require('mongoose');

const landlordUserSchema = new mongoose.Schema({
    googleId: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  domain: { type: String, required: true, unique: true },
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
  provider: { type: String, required: true },
  name: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
      updatedAt: {
        type: Date,
          default: Date.now
      }
});

const LandlordUser = mongoose.model('LandlordUser', landlordUserSchema);

module.exports = LandlordUser;