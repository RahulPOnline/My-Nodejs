const express = require("express")
const {getAllMens,getAllMensByid} = require('./mensData.controller')
const mensRoutes = express.Router()

mensRoutes.get("/",getAllMens)
mensRoutes.get("/:id",getAllMensByid)

module.exports=mensRoutes