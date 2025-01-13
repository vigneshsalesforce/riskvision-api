const mongoose = require('mongoose');
const configurationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    structure: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  }, {
    timestamps: true,
  });


module.exports = configurationSchema;