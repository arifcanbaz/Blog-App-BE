"use strict"

const express = require('express')
const app = express()
const cors = require('cors')

/* ------------------------------------------------------- */
// Required Modules:

require('dotenv').config()
const PORT = process.env?.PORT || 8000

app.use(cors())

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()
/* ------------------------------------------------------- */