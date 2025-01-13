const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Tenant  = require('../models/landlord/tenant');
const ApiError = require('../utils/apiError');
const path = require('path');
const fs = require('fs').promises;
const { createTenantDbConnection } = require('../config/database');


const generateToken = (user, tenant) => {
    return jwt.sign({ user: user, tenantId: tenant }, config.jwtSecret, {
        expiresIn: '1h'
    })
};

const createDefaultTenantConfig = async (tenantDb) => {
    const configDir = path.resolve(__dirname, '../default_configs'); // Absolute path to default_configs
    const configFiles = [
        { name: 'Brewery Site Inspection', path: path.join(configDir, 'brewerySiteInspection.js') },
        { name: 'COPE Assessment', path: path.join(configDir, 'copeAssessment.js') },
        { name: 'Hazards Inspection', path: path.join(configDir, 'hazardsInspection.js') },
        { name: 'Liability Risk Rating', path: path.join(configDir, 'liablilityRiskRating.js') },
        { name: 'Non Standard Assessment', path: path.join(configDir, 'nonStandardAssessment.js') },
        { name: 'Product Safety Assessment', path: path.join(configDir, 'productSafetyAssessment.js') },
        { name: 'Product Safety Risk Rating', path: path.join(configDir, 'productSafetyRiskRating.js') },
        { name: 'Property Risk Assessment', path: path.join(configDir, 'propertyRiskAssessment.js') },
        { name: 'Property Risk Rating', path: path.join(configDir, 'propertyRiskRating.js') },
    ];

    try {
        // Read all configurations
        const configurations = await Promise.all(
            configFiles.map(async (configFile) => {
                try {
                    console.log(`Loading configuration from: ${configFile.path}`);
                    const structure = require(configFile.path);
                    return {
                        name: configFile.name,
                        structure,
                    };
                } catch (error) {
                    console.warn(`Warning: Configuration file not found: ${configFile.path}`);
                    return null; // Skip this configuration if not found
                }
            })
        ).then((configs) => configs.filter(Boolean)); // Remove null values

        // Perform bulk insert into the tenant's Configuration collection
        await tenantDb.models.configuration.insertMany(configurations);

        console.log('Default tenant configurations created successfully!');
    } catch (error) {
        console.error('Error creating default configurations:', error);
        throw new ApiError('Error creating default configurations', 500);
    }
};



const handleGoogleLogin = (req, res, next) => {

    passport.authenticate('google', async (err, user) => {

        if (err || !user) {
            return next(new ApiError('Authentication failed', 401));
        }

        const userEmail = user.email;
        const domain = userEmail.substring(userEmail.indexOf("@") + 1).split(".")[0];
        const domainName = domain === 'gmail' ? 'public' : domain;
        const tenant = await Tenant.findOne({domain: domainName});

        if (!tenant){
            //create new tenant
            const dbName = `${domainName}_tenant`;
           const newTenant = new Tenant({
               name: `${userEmail.substring(userEmail.indexOf("@") + 1)}`,
               databaseName: dbName,
               domain: domain
           });

            const savedTenant = await newTenant.save();
            const tenantDb = await createTenantDbConnection(dbName);
            const newProfile = new tenantDb.models.profile({
                name: "System Admin",
           })

           await newProfile.save();

            const newTenantUser = new tenantDb.models.user({
                email: user.email,
                name: user.name || 'Unnamed User',
                profile: newProfile._id,
            });

             await newTenantUser.save();

            await createDefaultTenantConfig(tenantDb)
             const client = domain === 'gmail' ? 'public' : domain;
             const token = generateToken(newTenantUser, savedTenant);
             const frontEndURL = process.env.WILDCARD_FRONTEND_URL.replace('*', client);
            const redirectURL =  `${frontEndURL}/redirect?token=${token}&client=${client}`;

            return res.redirect(redirectURL)
        }

        // User exists in the landlord db, retrieve from tenant db.
        const tenantDb = await createTenantDbConnection(tenant.databaseName);
        const existingTenantUser = await tenantDb.models.user.findOne({email: user.email});
        const token = generateToken(existingTenantUser, tenant)

        const frontEndURL = process.env.WILDCARD_FRONTEND_URL.replace('*', client);
       const redirectURL =  `${frontEndURL}/redirect?token=${token}&client=${client}`;
    return res.redirect(redirectURL)


    })(req, res, next);
};

const getMe = async (req) => {
    return {
       user: req.user,
        tenantId: req.tenantId
    }
}

module.exports = {
    handleGoogleLogin,
    getMe
}