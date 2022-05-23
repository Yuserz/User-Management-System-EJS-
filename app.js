const express = require('express');
const expressLayout = require("express-ejs-layouts");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require("dotenv");


const app = express();

dotenv.config({path: './.env'})

  
app.use(expressLayout)
app.set('layout', './layouts/main')
// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true})); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static('public'));

// Templating Engine
app.set('view engine','ejs');
 

const routes = require('./server/routes/user');
app.use('/', routes);


app.listen(3000, () =>{
    console.log("Server started in port 3000")
})


