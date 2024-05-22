"use strict"

const router = require('express').Router()

router.use("/users",require("./user"))
router.use("/tokens",require("./token"))
router.use("/auth",require("./auth"))
router.use("/categories",require("./category"))
router.use("/blogs",require("./blogs"))

module.exports = router