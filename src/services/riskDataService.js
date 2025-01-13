const allRiskData = async (req) => {
    try {
        const { RiskData } = req.models;
        const riskData = await RiskData.find();
        return riskData;
    } catch (error) {
        throw error;
    }
}

const newRiskData = async (req) => {
    try {
        const { RiskData } = req.models;
        const riskDataValues = req?.body;
        const riskData = new RiskData(riskDataValues);
        await riskData.save();
        return riskData;
    } catch (error) {
        throw error;
    }
}

const retrieveRiskData = async (req) => {
    try {
        const { RiskData } = req.models;
        const riskData = await RiskData.findById(req.params.id);
        return riskData;
    }
    catch (error) {
        throw error;
    }
}

const modifyRiskData = async (req) => {
    try {
        const { RiskData } = req.models;
        const riskDataValues = req?.body;
        const riskData = await RiskData.findByIdAndUpdate(req.params.id, riskDataValues, { new: true });
        return riskData;
    } catch (error) {
        throw error;
    }
}


const archiveRiskData = async (req) => {
    try {
        const { RiskData } = req.models;
        await RiskData.findByIdAndDelete(req.params.id);
        return { message: 'Risk Data deleted successfully' };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allRiskData,
    newRiskData,
    retrieveRiskData,
    modifyRiskData,
    archiveRiskData,
}