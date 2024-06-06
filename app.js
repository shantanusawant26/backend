const dbconnection= require("./db")
const cors = require('cors');
const express = require("express");
const app = express();
const conatactUsRouters = require("./contactUsRouters");
const applicationFormRouters = require("./applicationFormRouters");
const classesRouters = require('./classRouters')
const bodyParser = require("body-parser");
const subscribeRouters = require("./subscribeRouters")
const chatBotRouter = require('./chatBotRouters')

// Define middleware
app.use(express.json());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());



app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use("/",(req, res) => {
    res.json("Both userMessage and response fields are required" );
})

const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});




module.exports = app;
