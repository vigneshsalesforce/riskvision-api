const mongoose = require("mongoose");

// Field Schema
const fieldSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Field name (used internally)
  label: { type: String, required: true }, // Display label
  type: { type: String, required: true }, // Field type (e.g., text, dropdown, lookup)
  sequence: { type: Number, required: true }, // Display order
  required: { type: Boolean, default: false }, // Is this field mandatory?
  options: {
    static: { type: [String], default: [] }, // Static options for dropdowns
    dynamic: {
      objectName: { type: String }, // Related object name (e.g., "user", "account")
      displayField: { type: String }, // Field to display in the UI
      valueField: { type: String }, // Field to use as the value
    },
  }, // Options for dropdowns or lookups
  tooltip: { type: String }, // Help text for the field
  defaultValue: { type: String }, // Default value for the field
});

// Section Schema
const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Section name
  sequence: { type: Number, required: true }, // Display order
  fields: [fieldSchema], // Array of fields within the section
});

// Screen Schema
const screenSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Screen name
  sequence: { type: Number, required: true }, // Display order
  sections: [sectionSchema], // Array of sections within the screen
});

// Wizard Object Definition Schema
const wizardObjectDefinitionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, 
    //  name (e.g., "product_safety")
    label: { type: String, required: true }, // Display label for the object
    description: { type: String }, // Description of the object
    screens: [screenSchema], // Array of screens
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User who created the definition
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User who last updated the definition
    // Removed objectName field
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Ensure unique index on name field
wizardObjectDefinitionSchema.index({ name: 1 }, { unique: true });

module.exports = wizardObjectDefinitionSchema;

