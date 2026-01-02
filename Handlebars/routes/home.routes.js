const express = require('express')
const fileController = require('../controller/file.controller')
const homeRouter = express.Router()

homeRouter.get("/",fileController.homepage)


module.exports=homeRouter