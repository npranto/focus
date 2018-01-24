// IMPORT PACKAGES/DEPENDENCIES & LOCAL FILES
require('dotenv').config();	// to access environmental variables
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


// INITIALZE NEW EXPESS APP
const app = express();



// MIDDLEWARES



// ROUTE HANDLERS
app.get('/', (req, res, next) => {
	res.send('Welcome to Focus API!');
});
routes(app);



// CONNECT TO MONGODB THROUGH MONGOOSE & START LISTENING TO IT
mongoose.connect(`mongodb://${process.env.MLAB_DB_USER}:${process.env.MLAB_DB_PASSWORD}@ds127730.mlab.com:27730/focus-dev`);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error :('));
mongoose.connection.once('open', () => {
  console.log(`Successfully connected to MongoDB :)`);
});



// CREATE PORT & START LISTENING FOR ACTIONS
const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
	console.log(`Successfully listening to PORT ${PORT} :)`);
})
