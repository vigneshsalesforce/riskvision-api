const mongoose = require('mongoose');

const propertyRiskAssessmentSchema = new mongoose.Schema(
    {
        IsDeleted: { type: Boolean, default: false },
        PropertyRiskAssessmentName: { type: String, required: true },
        Company: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'account', 
            default: null,
            set: (val) => val === '' ? null : val,
        },
        Location: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'location', 
            default: null,
            set: (val) => val === '' ? null : val,
        },
        AssignedTo: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'contact', 
            default: null,
            set: (val) => val === '' ? null : val,
        },
        CreatedById: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null  },
        LastModifiedById: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
    },
    { timestamps: true }
);


module.exports = propertyRiskAssessmentSchema;