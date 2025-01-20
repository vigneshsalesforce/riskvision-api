const logger = require("./../logger/log");
const {
    allUsers,
    retrieveUser,
    newUser,
    modifyUser,
    archiveUser,
    retrieveUserProfiles,
} = require("../services/userService");

const getAllUsers = async (req, res) => {
    try {
        logger.info(`Get all users request`);
        const users = await allUsers(req);
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        logger.error(`Get all users request failed`, error);
    }
}

const createUser = async (req, res) => {
    try {
        logger.info(`Create user request`);
        const user = await newUser(req);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        logger.error(`Create user request failed`, error);
    }
}

const getUser = async (req, res) => {
    try {
        logger.info(`Get user request for id ${req.params.id}`);
        const user = await retrieveUser(req);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        logger.error(`Get user request failed for id ${req.params.id}`, error);
    }
}

const updateUser = async (req, res) => {
    try {
        logger.info(`Update user request for id ${req.params.id}`);
        const user = await modifyUser(req);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        logger.error(
            `Update user request failed for id ${req.params.id}`,
            error
        );
    }
}

const deleteUser = async (req, res) => {
    try {
        logger.info(`Delete user request for id ${req.params.id}`);
        const user = await archiveUser(req);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        logger.error(
            `Delete user request failed for id ${req.params.id}`,
            error
        );
    }
}

const getUserProfiles = async(req, res) => {
    try{
        logger.info(`Get user profiles request`);
        const userProfiles = await retrieveUserProfiles(req);
        res.status(200).json({ success: true, data: userProfiles });
    } catch(error){
        logger.error(`Get user profiles request failed`, error);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getUserProfiles,
}