const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Initialise express app, use cors and express module
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

//Initialise .env file
require('dotenv').config();
//Set up default mongoose connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('open', () => {
  console.log("MongoDB database connection established successfully");
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Router files
const sensorDataAPI = require("./API/sensorDataAPI");
app.use('/sensor-data', sensorDataAPI);
const IFRAPI = require("./API/IFRAPI");
app.use('/IFR', IFRAPI);
const photosAPI = require("./API/photosAPI");
app.use('/photos', photosAPI);
const sse = require("./API/SSE");
app.use('/sse', sse.sse);

//Listen on port 5000 (local)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});