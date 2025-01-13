const express = require('express');
const routes = express.Router();

const tenantMiddleware = require('../middleware/tenantMiddleware')
const authRouter = require("./authRoutes");
const accountRouter = require("./accountRoutes");
const contactRouter = require("./contactRoutes");
const buildingRouter = require("./buildingRoutes");
const locationRouter = require("./locationRoutes");
const configurationRouter = require("./configRoutes");
const riskDataRouter = require("./riskDataRoutes");
const userRouter = require("./userRoutes");

const applicationApiPrefix = "/api";
const account = "/account";
const contact = "/contact";
const building = "/building";
const location = "/location";
const configuration = "/configuration";
const riskData = "/risk-data";
const user = "/user";
const auth = "/auth";


routes.get("/", (req, res) => {
    res.status(200).send("Welcome to the Riskvision API");
});

routes.use(`${applicationApiPrefix}${auth}`, authRouter);
routes.use(`${applicationApiPrefix}${account}`, tenantMiddleware, accountRouter);
routes.use(`${applicationApiPrefix}${contact}`, tenantMiddleware, contactRouter);
routes.use(`${applicationApiPrefix}${building}`, tenantMiddleware, buildingRouter);
routes.use(`${applicationApiPrefix}${location}`, tenantMiddleware, locationRouter);
routes.use(`${applicationApiPrefix}${configuration}`, tenantMiddleware, configurationRouter);
routes.use(`${applicationApiPrefix}${riskData}`, tenantMiddleware, riskDataRouter);
routes.use(`${applicationApiPrefix}${user}`, tenantMiddleware, userRouter);

module.exports = routes;