const mongoose = require("mongoose");

const brewerySiteInspectionSchema = new mongoose.Schema(
  {
    IsDeleted: { type: Boolean, default: false },
    BrewerySiteInspectionName: { type: String, required: true },
    Company: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    Location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },

    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = brewerySiteInspectionSchema;
