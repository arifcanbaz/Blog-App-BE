"use strict"

const express = require('express')
const app = express()
const cors = require('cors')

/* ------------------------------------------------------- */
// Required Modules:

require('dotenv').config()
const PORT = process.env?.PORT || 8000

app.use(cors())

require('express-async-errors')
