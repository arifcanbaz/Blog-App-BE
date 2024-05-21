"use strict"

const router = require('express').Router()

router.use("/users",require("./user"))
router.use("/tokens",require("./token"))
router.use("/auth",require("./auth"))

module.exports = router