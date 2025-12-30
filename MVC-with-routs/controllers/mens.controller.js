let mensArr = require("../models/mens.model")

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


function deleteMenDataById(req, res) {
    const id = +req.params.id
    mensArr = mensArr.filter((el, i, arr) => {
        return el.id != id
    })
    res.json(mensArr)
}


function patchMenDataById(req, res) {
    const id = +req.params.id
    mensArr = mensArr.map((el, i, arr) => {
        let update = req.body
        if (el.id == id) {
            return {...el,...update}
        }
        else {
            return el
        }

    })
    res.json(mensArr)
}


function putMenDataById(req, res) {
    const id = +req.params.id
    mensArr = mensArr.map((el, i, arr) => {
        let update = req.body
        if (el.id == id) {
            return {id,...update}
        }
        else {
            return el
        }

    })
    res.json(mensArr)
}




module.exports = {
    getAllmens,
    postMensdata,
    getMensDatabyid,
    deleteMenDataById,
    patchMenDataById,
    putMenDataById
}