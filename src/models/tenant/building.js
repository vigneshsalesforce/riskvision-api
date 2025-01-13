const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema(
  {
    OwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    Name: { type: String, required: true },
    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    Area_m2: { type: String },
    Comments: { type: String },
    InternalWalls: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    FireDivisions: { type: String },
    Floors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    Height: { type: String },
    ExternalWalls: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    Occupancy: { type: String },
    PropertyRiskAssessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PropertyRiskAssessment",
    },
    Protection: { type: String },
    Roof: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    StructuralFrame: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Picklist" },
    ], //multipicklist
    Type_of_ISP: { type: String },
    YearConstructed: { type: String },
    of_ISP: { type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }, //picklist
    Company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    Comments_Backup: { type: String },
  },
  { timestamps: true }
);

module.exports = buildingSchema;
