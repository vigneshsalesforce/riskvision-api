const logger = require("./../logger/log");
const {
    allContacts,
    newContact,
    retrieveContact,
    modifyContact,
    archiveContact,
} = require("../services/contactService");

const getAllContacts = async (req, res) => {
    try {
        logger.info(`Get all contacts request`);
        const contacts = await allContacts(req);
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        logger.error(`Get all contacts request failed`, error);
        next(error);
    }
};

const createContact = async (req, res) => {
    try {
        logger.info(`Create contact request`);
        const contact = await newContact(req);
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        logger.error(`Create contact request failed`, error);
        next(error);
    }
}

const getContact = async (req, res) => {
    try {
        logger.info(`Get contact request for id ${req.params.id}`);
        const contact = await retrieveContact(req);
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        logger.error(`Get contact request failed for id ${req.params.id}`, error);
        next(error);
    }
}

const updateContact = async (req, res) => {
    try {
        logger.info(`Update contact request for id ${req.params.id}`);
        const contact = await modifyContact(req);
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        logger.error(
            `Update contact request failed for id ${req.params.id}`,
            error
        );
        next(error);
    }
}

const deleteContact = async (req, res) => {
    try {
        logger.info(`Delete contact request for id ${req.params.id}`);
        const contact = await archiveContact(req);
        res.status(200).json({ success: true, data: contact });
    } catch (error) {
        logger.error(`Delete contact request failed for id ${req.params.id}`, error);
        next(error);
    }
}

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
}