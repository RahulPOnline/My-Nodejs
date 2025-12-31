const express = require('express')
const womensController = require("../controllers/womens.controller")


const womensRouter = express.Router()

womensRouter.get("/", womensController.getAllwomens)

womensRouter.post("/", womensController.postWomensdata)

womensRouter.get("/:id", womensController.getWomensDatabyid)

womensRouter.delete("/:id", womensController.deleteWomenDataById)

womensRouter.patch("/:id", womensController.patchWomenDataById)

womensRouter.put("/:id", womensController.putWomenDataById)


module.exports=womensRouter