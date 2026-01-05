const express = require("express")
const fileController2 = require('../controller/file2.controller')

const fileRouter2 = express.Router()

fileRouter2.get('/',fileController2.homePage)

module.exports=fileRouter2