const express = require('express')
const mensController = require("../controllers/mens.controller")


const mensRouter = express.Router()

mensRouter.get("/", mensController.getAllmens)

mensRouter.post("/", mensController.postMensdata)

mensRouter.get("/:id", mensController.getMensDatabyid)

mensRouter.delete("/:id", mensController.deleteMenDataById)

mensRouter.patch("/:id", mensController.patchMenDataById)

mensRouter.put("/:id", mensController.putMenDataById)


module.exports=mensRouter