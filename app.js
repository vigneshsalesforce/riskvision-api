const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('./src/config/passport');
const routes = require('./src/routes/main');
const errorMiddleware = require('./src/middleware/errorMiddleware');
const session = require('express-session');

const app = express();

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests from any origin for development
        callback(null, true);
    },
    credentials: true, // Allow cookies to be sent
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'reduwchwcwdx',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(routes);

// Error handling
app.use(errorMiddleware);

module.exports = app;