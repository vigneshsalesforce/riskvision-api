const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema(
  {
    OwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    Name: { type: String, required: true },
    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    Area_m2: { type: String },
    Comments: { type: String },
    InternalWalls: [{ type: String }], // Multipicklist (array of strings)
    FireDivisions: { type: String },
    Floors: [{ type: String }], // Multipicklist (array of strings)
    Height: { type: String },
    ExternalWalls: [{ type: String }], // Multipicklist (array of strings)
    Occupancy: { type: String },
    PropertyRiskAssessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PropertyRiskAssessment",
    },
    Protection: { type: String },
    Roof: [{ type: String }], // Multipicklist (array of strings)
    StructuralFrame: [{ type: String }], // Multipicklist (array of strings)
    Type_of_ISP: { type: String },
    YearConstructed: { type: String },
    of_ISP: { type: String }, // Picklist
    Account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    Comments_Backup: { type: String },
  },
  { timestamps: true }
);

module.exports = buildingSchema;