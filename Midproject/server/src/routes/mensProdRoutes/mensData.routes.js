const express = require("express")
const {getAllMensData,getAllMensDataByid} = require('./mensData.controller')
const mensRoutes = express.Router()

mensRoutes.get("/",getAllMensData)
mensRoutes.get("/:id",getAllMensDataByid)

module.exports=mensRoutes