const allContacts = async (req) => {
    try {
        const { Contact } = req.models;
        const contacts = await Contact.find();
        return contacts;
    } catch (error) {
        throw error;
    }
}

const newContact = async (req) => {
    try {
        const { Contact } = req.models;
        const contactValues = req?.body;
        const contact = new Contact(contactValues);
        await contact.save();
        return contact;
    } catch (error) {
        throw error;
    }
}

const retrieveContact = async (req) => {
    try {
        const { Contact } = req.models;
        const contact = await Contact.findById(req.params.id);
        return contact;
    } catch (error) {
        throw error;
    }
}

const modifyContact = async (req) => {
    try {
        const { Contact } = req.models;
        const contactValues = req?.body;
        const contact = await Contact.findByIdAndUpdate(req.params.id, contactValues, { new: true });
        return contact;
    } catch (error) {
        throw error;
    }
}

const archiveContact = async (req) => {
    try {
        const { Contact } = req.models;
        const contact = await Contact.findByIdAndDelete(req.params.id);
        return contact;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allContacts,
    newContact,
    retrieveContact,
    modifyContact,
    archiveContact,
}