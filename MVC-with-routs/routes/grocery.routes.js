const express = require("express")
const {getALLGrocery,getGroceryById,postGrocerydata,deleteGroceryDataById} = require("../controllers/grocery.controller")

const groceryRoutes = express.Router()

groceryRoutes.get("/",getALLGrocery)
groceryRoutes.get("/:id",getGroceryById)
groceryRoutes.post("/",postGrocerydata)
groceryRoutes.delete("/:id",deleteGroceryDataById)

module.exports=groceryRoutes