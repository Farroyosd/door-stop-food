const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
console.log("key", process.env);
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

module.exports = app;
