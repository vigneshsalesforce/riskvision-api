const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Internal identifier for the field
  label: { type: String, required: true }, // User-friendly label
  type: {
    type: String,
    enum: [
      "text",
      "number",
      "date",
      "dropdown",
      "checkbox",
      "textarea",
      "lookup",
      "radio",
      "file",
      "email",
      "phone",
      "url",
      "currency",
      "time",
      "datetime",
      "password",
      "multiselect",
      "slider",
    ],
    required: true,
  }, // Field type
  required: { type: Boolean, default: false }, // Is the field mandatory
  helpText: { type: String }, // Tooltip or guidance for the user
  validation: {
    pattern: String, // Regex for validation
    minLength: Number, // Min length for text
    maxLength: Number, // Max length for text
    min: Number, // Min value for numbers
    max: Number, // Max value for numbers
  }, // Validation rules
  options: {
    static: [String], // Static options for dropdown/radio
    dynamic: {
      objectName: String, // Lookup object for dynamic options
      displayField: String, // Field to display in UI
      valueField: String, // Field to store in the database
    },
  }, // Options for dropdown/lookup fields
  order: { type: Number, required: true }, // Display order in the form
  step: { type: Number, default: 1 }, // Wizard step (default to 1)
  isHidden: { type: Boolean, default: false }, // Should this field be hidden
  isReadOnly: { type: Boolean, default: false }, // Should this field be read-only
});

module.exports = fieldSchema;