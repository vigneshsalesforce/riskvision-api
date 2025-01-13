const logger = require("./../logger/log");
const {
    allAccounts,
  retrieveAccount,
  newAccount,
  modifyAccount,
  archiveAccount,
} = require("./../services/accountService");

const getAllAccounts = async (req, res) => {
  try {
    logger.info(`Get all companies request`);
    const companies = await allAccounts(req);
    res.status(200).json({ success: true, data: companies });
  } catch (error) {
    logger.error(`Get all companies request failed`, error);
  }
};

const createAccount = async (req, res) => {
  try {
    logger.info(`Create company request`);
    const company = await newAccount(req);
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    logger.error(`Create company request failed`, error);
  }
};

const getAccount = async (req, res) => {
  try {
    logger.info(`Get company request for id ${req.params.id}`);
    const company = await retrieveAccount(req);
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    logger.error(`Get company request failed for id ${req.params.id}`, error);
  }
};

const updateAccount = async (req, res) => {
  try {
    logger.info(`Update company request for id ${req.params.id}`);
    const company = await modifyAccount(req);
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    logger.error(
      `Update company request failed for id ${req.params.id}`,
      error
    );
  }
};

const deleteAccount = async (req, res) => {
  try {
    logger.info(`Delete company request for id ${req.params.id}`);
    const company = await archiveAccount(req);
    res.status(200).json({ success: true, data: company });
  } catch (error) {
    logger.error(
      `Delete company request failed for id ${req.params.id}`,
      error
    );
  }
};

module.exports = {
    getAllAccounts,
    createAccount,
    getAccount,
    updateAccount,
    deleteAccount,
};