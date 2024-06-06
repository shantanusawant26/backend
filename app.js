// const dbconnection= require("./db")

const express = require("express");
const app = express();





app.use("/",(req, res) => {
    res.json("Both userMessage and response fields are required" );
})

const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});




module.exports = app;
