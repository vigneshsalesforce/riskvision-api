const allUsers = async (req) => {
    try {
        const { User } = req.models;
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
}

const newUser = async (req) => {
    try {
        const { User } = req.models;
        const userValues = req?.body;
        const user = new User(userValues);
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

const retrieveUser = async (req) => {
    try {
        const { User } = req.models;
        const user = await User.findById(req.params.id);
        return user;
    } catch (error) {
        throw error;
    }
}

const modifyUser = async (req) => {
    try {
        const { User } = req.models;
        const userValues = req?.body;
        const user = await User.findByIdAndUpdate(req.params.id, userValues, { new: true });
        return user;
    } catch (error) {
        throw error;
    }
}

const archiveUser = async (req) => {
    try {
        const { User } = req.models;
        const user = await User.findByIdAndDelete(req.params.id);
        return user;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    allUsers,
    newUser,
    retrieveUser,
    modifyUser,
    archiveUser,
}