// import file
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt =require('bcrypt') ;
module.exports = {
  cors,
  express,
  app,
  mongoose,
  bodyParser,
  morgan,
  dotenv,
  jwt , 
  bcrypt , 
};
