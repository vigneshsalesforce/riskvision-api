const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    IsDeleted: { type: Boolean, default: false },
    MasterRecordId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    Name: { type: String, required: true },
    Type: { type: mongoose.Schema.Types.ObjectId, ref: 'Picklist' },
    ParentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
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
    Industry: { type: mongoose.Schema.Types.ObjectId, ref: 'Picklist' },
    AnnualRevenue: { type: Number },
    NumberOfEmployees: { type: Number },
    Description: { type: String },
    OwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    LastActivityDate: { type: Date },
    LastViewedDate: { type: Date },
    LastReferencedDate: { type: Date },
    IsCustomerPortal: { type: Boolean, default: false },
    JigsawCompanyId: { type: String },
    IsPriorityRecord: { type: Boolean, default: false },
    RenewalDate: { type: String },
    Global: { type: Boolean, default: false },
    Referrer: { type: String },
    CurrentBroker: { type: String },
    Days_Since_Created: { type: Number },
    Days_Since_Last_Modified: { type: Number },
    Days_Since_Last_Activity: { type: Number },
    SubType: { type: mongoose.Schema.Types.ObjectId, ref: 'Picklist' },
    IsNextYearLeap: { type: Boolean, default: false },
    NextRenewalOn: { type: Date },
    BDM: { type: mongoose.Schema.Types.ObjectId, ref: 'Picklist' },
},
{ timestamps: true }
);

// Virtual property to reconstruct the full addresses
companySchema.virtual('BillingAddress').get(function () {
    return {
        street: this.BillingStreet,
        city: this.BillingCity,
        state: this.BillingState,
        postalCode: this.BillingPostalCode,
        country: this.BillingCountry,
    };
});

companySchema.virtual('ShippingAddress').get(function () {
    return {
        street: this.ShippingStreet,
        city: this.ShippingCity,
        state: this.ShippingState,
        postalCode: this.ShippingPostalCode,
        country: this.ShippingCountry,
    };
});

companySchema.index({ Name: 1 }, { unique: true });


module.exports = companySchema;
