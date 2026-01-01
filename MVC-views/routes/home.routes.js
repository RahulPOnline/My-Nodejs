const express = require('express')
const fileController = require('../controller/file.controller')

const fileRouter = express.Router()

fileRouter.get("/",fileController.homepage)


module.exports=fileRouter