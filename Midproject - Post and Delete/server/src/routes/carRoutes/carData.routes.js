const express = require("express")
const {getAllCarsData,getCarsDataById} = require("./carData.controller")
const carRoutes = express.Router()

carRoutes.get("/",getAllCarsData)
carRoutes.get("/:id",getCarsDataById)

module.exports=carRoutes