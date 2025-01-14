const mongoose = require('mongoose');

const RiskDataSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Company' 
    },
    createdById: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' 
    },
    lastModifiedById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Configuration', 
        required: true,
    },
    data: {
        type: mongoose.Schema.Types.Mixed, 
        required: true
    }
}, {
    timestamps: true 
});


module.exports = RiskDataSchema;
