const allAccounts = async (req) => {
    try{
        const {Account} = req.tenantDb.models;
        const accounts = await Account.find();
        return accounts;
    } catch(error){
        throw error;
    }
}

const newAccount = async (req) => {
    try{
        const {Account} = req.tenantDb.models;
        const account = new Account(req.body);
        await account.save();
        return account;
    } catch(error){
        throw error;
    }
}

const retrieveAccount = async (req) => {
    try{
        const {Account} = req.tenantDb.models;
        const account = await Account.findById(req.params.id);
        return account;
    } catch(error){
        throw error;
    }
}

const modifyAccount = async (req) => {
    try{
        const {Account} = req.tenantDb.models;
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return account;
    } catch(error){
        throw error;
    }
}

const archiveAccount = async (req) => {
    try{
        const {Account} = req.tenantDb.models;
        const account = await Account.findByIdAndUpdate(req.params.id, {isArchived: true}, {new: true});
        return account;
    } catch(error){
        throw error;
    }
}

module.exports = {
    allAccounts,
    newAccount,
    retrieveAccount,
    modifyAccount,
    archiveAccount
}