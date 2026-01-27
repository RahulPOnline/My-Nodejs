const express = require("express")
const { getAllwomensdata, getAllwomensdatabyid } = require("../womensProdRoutes/womensData.controller")
const womensRoutes = express.Router()

womensRoutes.get("/",getAllwomensdata)
womensRoutes.get("/:id",getAllwomensdatabyid)

module.exports=womensRoutes