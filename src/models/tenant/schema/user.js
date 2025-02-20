const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.virtual('fullName').get(function () {
  return this.name;
});

userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

module.exports = userSchema;