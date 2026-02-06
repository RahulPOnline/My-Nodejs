const express = require("express")
const { getAllelectronicsItem, getelectronicsById, postelectronicsData, deleteElectronicsDataById, patchElectronicsDataById, putElectronicsDataById } = require("../controllers/electronics.controller")
const electronicsRoutes = express.Router()

electronicsRoutes.get("/", getAllelectronicsItem)
electronicsRoutes.get("/:id", getelectronicsById)
electronicsRoutes.post("/", postelectronicsData)
electronicsRoutes.delete("/:id", deleteElectronicsDataById)
electronicsRoutes.patch("/:id", patchElectronicsDataById)
electronicsRoutes.put("/:id", putElectronicsDataById)
module.exports = electronicsRoutes