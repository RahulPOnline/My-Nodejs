const express=require("express")
const {getAllProducts,getProductsById,postProducts} = require("./products.controller")

const prodRoutes = express.Router()

prodRoutes.get("/",getAllProducts)
prodRoutes.post("/",postProducts)
prodRoutes.get("/:id",getProductsById)

module.exports=prodRoutes