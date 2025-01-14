const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    IsDeleted: { type: Boolean, default: false },
    Name: { type: String, required: true },
    Type: { type: String }, // Picklist values to be defined in ObjectDefinition
    ParentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    BillingStreet: { type: String },
    BillingCity: { type: String },
    BillingState: { type: String },
    BillingPostalCode: { type: String },
    BillingCountry: { type: String },
    BillingLatitude: { type: Number },
    BillingLongitude: { type: Number },
    ShippingStreet: { type: String },
    ShippingCity: { type: String },
    ShippingState: { type: String },
    ShippingPostalCode: { type: String },
    ShippingCountry: { type: String },
    ShippingLatitude: { type: Number },
    ShippingLongitude: { type: Number },
    Phone: { type: String },
    Fax: { type: String },
    Website: { type: String },
    PhotoUrl: { type: String },
    Industry: { type: String }, // Picklist values to be defined in ObjectDefinition
    AnnualRevenue: { type: Number },
    NumberOfEmployees: { type: Number },
    Description: { type: String },
    OwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    RenewalDate: { type: String },
    Global: { type: Boolean, default: false },
    Referrer: { type: String },
    CurrentBroker: { type: String },
    Days_Since_Created: { type: Number },
    Days_Since_Last_Modified: { type: Number },
    Days_Since_Last_Activity: { type: Number },
    SubType: { type: String }, // Picklist values to be defined in ObjectDefinition
    IsNextYearLeap: { type: Boolean, default: false },
    NextRenewalOn: { type: Date },
    BDM: { type: String }, // Picklist values to be defined in ObjectDefinition
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

module.exports = accountSchema;
