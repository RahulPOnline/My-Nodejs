const express = require("express")
const {getALLGrocery,getGroceryById,postGrocerydata} = require("../controllers/grocery.controller")

const groceryRoutes = express.Router()

groceryRoutes.get("/",getALLGrocery)
groceryRoutes.get("/:id",getGroceryById)
groceryRoutes.post("/",postGrocerydata)

module.exports=groceryRoutes