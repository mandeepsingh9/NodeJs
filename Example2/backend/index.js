const express = require("express");

const connect = require("./Db/db.js");
const userRoute = require("./Router/userRoute.js");

require('dotenv').config()

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoute);

// Database connection
connect();

// Start the server
console.log(process.env.PORT);
const port = process.env.PORT ;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
