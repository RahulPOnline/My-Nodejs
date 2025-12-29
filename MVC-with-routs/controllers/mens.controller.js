const mensArr=require("../models/mens.model")

function getAllmens(req, res) {
    res.json(mensArr)
}


function postMensdata(req, res) {
    let entry = req.body
    // if (!(entry.title && entry.price)) {
    //     res.status(400).json({ error: "invalid entry" })
    // }
    mensArr.push(entry)
    res.status(201).json(mensArr)
}


function getMensDatabyid(req, res) {
    let id = +req.params.id
    if (id > mensArr.length - 1) {
        res.status(404).json({ error: "data not found" })
    }
    res.send(mensArr[id])
}

module.exports={
    getAllmens,
    postMensdata,
    getMensDatabyid
}