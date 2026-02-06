let electronicsArr = require("../models/electronics.model")

function getAllelectronicsItem(req, res) {
    res.json(electronicsArr)
}

function getelectronicsById(req, res) {
    let id = Number(req.params.id)
    if (Number.isNaN(id) || id < 0 || id >= electronicsArr.length) {
        return res.status(404).json({ error: "data not found" })
    }
    res.json(electronicsArr[id])
}

function postelectronicsData(req, res) {
    const entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(400).json({ error: "invalid entry" })
    }
    entry.id = electronicsArr.length
    electronicsArr.push(entry)
    res.status(201).json(entry)
}

function deleteElectronicsDataById(req, res) {
    const id = Number(req.params.id)
    const index = electronicsArr.findIndex(el => el.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "item not found" })
    }
    electronicsArr.splice(index, 1)
    res.json({ message: "deleted successfully" })
}

function patchElectronicsDataById(req, res) {
    const id = Number(req.params.id)
    const update = req.body
    const index = electronicsArr.findIndex(el => el.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "data not found" })
    }
    electronicsArr[index] = { ...electronicsArr[index], ...update }
    res.json({ message: "data updated", data: electronicsArr[index] })
}


module.exports = {
    getAllelectronicsItem,
    getelectronicsById,
    postelectronicsData,
    deleteElectronicsDataById,
    patchElectronicsDataById,
    
}