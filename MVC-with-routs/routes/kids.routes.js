const express = require('express')
const kidsController = require('../controllers/kids.controller')

const kidsRouter = express.Router()

kidsRouter.get("/",kidsController.getAllkids)

module.exports=kidsRouter