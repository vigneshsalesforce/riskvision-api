const mongoose = require('mongoose');
const fieldSchema = require('./field');

const objectDefinitionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Internal object name
  label: { type: String, required: true }, // Display name of the object
  description: { type: String }, // Detailed description of the object
  fields: [fieldSchema], // Array of fields (using FieldSchema)
  relationships: [
    {
      name: { type: String, required: true }, // Relationship name (e.g., "contacts")
      relatedObject: { type: String, required: true }, // Name of the related object
      type: { type: String, enum: ['one-to-one', 'one-to-many', 'many-to-many'], required: true }, // Relationship type
      cascadeDelete: { type: Boolean, default: false }, // Whether to cascade delete related records
    },
  ], // Relationships with other objects
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who created this definition
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who last updated this definition
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = objectDefinitionSchema;