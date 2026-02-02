const groceriesArr = require("../models/grocery.model")


function getALLGrocery(req, res) {
    res.json(groceriesArr)
}

function getGroceryById(req, res) {
    let id = Number(req.params.id)
    if (Number.isNaN(id) || id < 0 || id >= groceriesArr.length) {          //If someone hits /groceries/abc, id becomes NaN.
        return res.status(404).json({ error: "data not found" })
    }
    res.json(groceriesArr[id])
}

function postGrocerydata(req, res) {
    let entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(400).json({ error: "invalid entry" })
    }
    entry.id = groceriesArr.length
    groceriesArr.push(entry)
    res.status(201).json(entry)
}

module.exports = {
    getALLGrocery,
    getGroceryById,
    postGrocerydata,

}