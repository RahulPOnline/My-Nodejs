const express = require("express")
const {getALLGrocery,getGroceryById,postGrocerydata,deleteGroceryDataById,patchGroceryDataById,putGroceryDataById} = require("../controllers/grocery.controller")

const groceryRoutes = express.Router()

groceryRoutes.get("/",getALLGrocery)
groceryRoutes.get("/:id",getGroceryById)
groceryRoutes.post("/",postGrocerydata)
groceryRoutes.delete("/:id",deleteGroceryDataById)
groceryRoutes.patch("/:id",patchGroceryDataById)
groceryRoutes.put("/:id",putGroceryDataById)

module.exports=groceryRoutes