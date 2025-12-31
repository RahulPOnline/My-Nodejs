let womensArr = require('../models/womens.model')

function getAllwomens(req, res){
    res.json(womensArr)
}

function postWomensdata(req, res) {
    let entry = req.body
    // if (!(entry.title && entry.price)) {
    //     res.status(400).json({ error: "invalid entry" })
    // }
    womensArr.push(entry)
    res.status(201).json(womensArr)
}


function getWomensDatabyid(req, res) {
    let id = +req.params.id
    if (id > womensArr.length - 1) {
        res.status(404).json({ error: "data not found" })
    }
    res.send(womensArr[id])
}


function deleteWomenDataById(req, res) {
    const id = +req.params.id
    womensArr = womensArr.filter((el, i, arr) => {
        return el.id != id
    })
    res.json(womensArr)
}


function patchWomenDataById(req, res) {
    const id = +req.params.id
    womensArr = womensArr.map((el, i, arr) => {
        let update = req.body
        if (el.id == id) {
            return {...el,...update}
        }
        else {
            return el
        }

    })
    res.json(womensArr)
}


function putWomenDataById(req, res) {
    const id = +req.params.id
    womensArr = womensArr.map((el, i, arr) => {
        let update = req.body
        if (el.id == id) {
            return {id,...update}
        }
        else {
            return el
        }

    })
    res.json(womensArr)
}


module.exports={
    getAllwomens,
    postWomensdata,
    getWomensDatabyid,
    deleteWomenDataById,
    patchWomenDataById,
    putWomenDataById
}