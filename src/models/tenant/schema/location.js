const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    OwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    IsDeleted: { type: Boolean, default: false },
    Name: { type: String, required: true },
    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    LastActivityDate: { type: Date },
    Active: { type: Boolean, default: true },
    Area_m2: { type: String },
    Account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    ExternalWalls: { type: String }, // Picklist
    Fire_Divisions: { type: String },
    Floors: [{ type: String }], // Multipicklist
    FullAddress: { type: String },
    Height: { type: String },
    Internal_Walls: [{ type: String }], // Multipicklist
    Location_City: { type: String },
    Location_Coordinates_Latitude: { type: Number },
    Location_Coordinates_Longitude: { type: Number },
    Location_Country: { type: String },
    Location_Postcode: { type: String },
    Location_State: { type: String },
    Location_Street: { type: String },
    Location_Type: { type: String }, // Picklist
    Occupancy: { type: String },
    Protection: { type: String },
    Roof: [{ type: String }], // Multipicklist
    StructuralFrame: [{ type: String }], // Multipicklist
    Type_of_ISP: { type: String },
    YearConstructed: { type: String },
    of_ISP: { type: String }, // Picklist
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

module.exports = locationSchema;