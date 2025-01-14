const express = require('express');
const routes = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const tenantMiddleware = require('../middleware/tenantMiddleware')
const authRouter = require("./authRoutes");
const accountRouter = require("./accountRoutes");
const contactRouter = require("./contactRoutes");
const buildingRouter = require("./buildingRoutes");
const locationRouter = require("./locationRoutes");
const configurationRouter = require("./configRoutes");
const riskDataRouter = require("./riskDataRoutes");
const userRouter = require("./userRoutes");
const objectRouter = require("./objectRoutes");

const applicationApiPrefix = "/api";
const account = "/account";
const contact = "/contact";
const building = "/building";
const location = "/location";
const configuration = "/configuration";
const riskData = "/risk-data";
const user = "/user";
const auth = "/auth";
const object = "/object";

routes.get("/", (req, res) => {
    res.status(200).send("Welcome to the Riskvision API");
});

routes.use(`${applicationApiPrefix}${auth}`, authRouter);
routes.use(`${applicationApiPrefix}${account}`, tenantMiddleware, authMiddleware, accountRouter);
routes.use(`${applicationApiPrefix}${contact}`, tenantMiddleware, authMiddleware, contactRouter);
routes.use(`${applicationApiPrefix}${building}`, tenantMiddleware,authMiddleware, buildingRouter);
routes.use(`${applicationApiPrefix}${location}`, tenantMiddleware, authMiddleware, locationRouter);
routes.use(`${applicationApiPrefix}${configuration}`, tenantMiddleware,authMiddleware, configurationRouter);
routes.use(`${applicationApiPrefix}${riskData}`, tenantMiddleware,authMiddleware, riskDataRouter);
routes.use(`${applicationApiPrefix}${user}`, tenantMiddleware, authMiddleware, userRouter);
routes.use(`${applicationApiPrefix}${object}`, tenantMiddleware, authMiddleware, objectRouter);

module.exports = routes;