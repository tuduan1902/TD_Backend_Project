const express = require('express');
const app = express();
const db = require('./config/db');
// Connect to DB
db.connect();
app.listen("5000",() =>{
    console.log("Backend is running.");
})