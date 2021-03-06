// IMPORT PACKAGES/DEPENDENCIES & LOCAL FILES
require('dotenv').config();	// to access environmental variables
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');

require('./models');
require('./services/passport');
const routes = require('./routes');



// INITIALIZE NEW EXPRESS APP
const app = express();



// MIDDLEWARES
app.use(cookieSession({
	maxAge: process.env.DEV_COOKIE_SESSION_MAX_AGE,
	keys: [process.env.DEV_COOKIE_SESSION_KEY_1]
}))
app.use(bodyParser.urlencoded({ extended: false }))				// parse application/x-www-form-urlencoded
app.use(bodyParser.json())										// parse application/json
app.use(passport.initialize());
app.use(passport.session());



// ROUTE HANDLERS
app.get('/', (req, res, next) => {
	res.send('Welcome to Focus API!');
})
app.get('/dashboard', (req, res, next) => {
	res.send('Welcome to the Dashboard!');
})
app.get('/signup', (req, res, next) => {
	res.send('Please sign up!');
})
routes(app);



// CONNECT TO MONGODB THROUGH MONGOOSE & START LISTENING TO IT
mongoose.connect(`mongodb://${process.env.DEV_MLAB_DB_USER}:${process.env.DEV_MLAB_DB_PASSWORD}@ds127730.mlab.com:27730/focus-dev`);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error :('));
mongoose.connection.once('open', () => {
  console.log(`Successfully connected to MongoDB :)`);
});



// CREATE PORT & START LISTENING FOR ACTIONS
const PORT = process.env.PORT || process.env.DEV_PORT;

app.listen(PORT, () => {
	console.log(`Successfully listening to PORT ${PORT} :)`);
})
