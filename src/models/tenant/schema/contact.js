const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    IsDeleted: { type: Boolean, default: false },
    Account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    LastName: { type: String, required: true },
    FirstName: { type: String },
    Salutation: { type: String }, // Picklist values to be defined in ObjectDefinition
    Name: { type: String },
    OtherStreet: { type: String },
    OtherCity: { type: String },
    OtherState: { type: String },
    OtherPostalCode: { type: String },
    OtherCountry: { type: String },
    OtherLatitude: { type: Number },
    OtherLongitude: { type: Number },
    MailingStreet: { type: String },
    MailingCity: { type: String },
    MailingState: { type: String },
    MailingPostalCode: { type: String },
    MailingCountry: { type: String },
    MailingLatitude: { type: Number },
    MailingLongitude: { type: Number },
    Phone: { type: String },
    Fax: { type: String },
    MobilePhone: { type: String },
    HomePhone: { type: String },
    OtherPhone: { type: String },
    AssistantPhone: { type: String },
    Email: { type: String, unique: true, sparse: true },
    Title: { type: String },
    Department: { type: String },
    AssistantName: { type: String },
    LeadSource: { type: String }, // Picklist values to be defined in ObjectDefinition
    Birthdate: { type: Date },
    Description: { type: String },
    OwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    PhotoUrl: { type: String },
    ContactSource: { type: String }, // Picklist values to be defined in ObjectDefinition
    eMarketingOptOut: { type: Boolean, default: false },
    Days_Since_Created: { type: Number },
    Executive_Assistant: { type: String },
    Book: { type: Boolean, default: false },
    Contact_Type_Old: { type: String }, // Picklist
    Days_Since_Last_Modified: { type: Number },
    Days_Since_Last_Activity: { type: Number },
    BDM: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to a user
    Receive_Christmas_Card: { type: Boolean, default: false },
    Referral_Dinner: { type: String }, // Picklist
    Other_Referral: { type: String },
    Connected_in_LinkedIn: { type: Boolean, default: false },
    Account_Manager: { type: String },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

module.exports = contactSchema;