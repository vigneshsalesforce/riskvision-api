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
    Company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    ExternalWalls: { type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }, //picklist
    Fire_Divisions: { type: String },
    Floors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    FullAddress: { type: String },
    Height: { type: String },
    Internal_Walls: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    Location_City: { type: String },
    Location_Coordinates_Latitude: { type: Number },
    Location_Coordinates_Longitude: { type: Number },
    Location_Country: { type: String },
    Location_Postcode: { type: String },
    Location_State: { type: String },
    Location_Street: { type: String },
    Location_Type: { type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }, //picklist
    Occupancy: { type: String },
    Protection: { type: String },
    Roof: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }], //multipicklist
    StructuralFrame: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Picklist" },
    ], //multipicklist
    Type_of_ISP: { type: String },
    YearConstructed: { type: String },
    of_ISP: { type: mongoose.Schema.Types.ObjectId, ref: "Picklist" }, //picklist
  },
  { timestamps: true }
);

// Virtual property to reconstruct Location coordinates
locationSchema.virtual("Location_Coordinates").get(function () {
  return {
    latitude: this.Location_Coordinates_Latitude,
    longitude: this.Location_Coordinates_Longitude,
  };
});


module.exports = locationSchema;
