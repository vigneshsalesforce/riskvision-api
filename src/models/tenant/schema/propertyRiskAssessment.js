const mongoose = require('mongoose');

const propertyRiskAssessmentSchema = new mongoose.Schema(
    {
        IsDeleted: { type: Boolean, default: false },
        PropertyRiskAssessmentName: { type: String, required: true },
        Company: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
        Location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
        AssignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
        CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);


module.exports = propertyRiskAssessmentSchema;