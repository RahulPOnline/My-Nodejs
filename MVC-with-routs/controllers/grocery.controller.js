let groceriesArr = require("../models/grocery.model")


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

// function deleteGroceryDataById(req, res) {
//     const id = Number(req.params.id)
//     const newArr = groceriesArr.filter(el => el.id !== id)
// }

function deleteGroceryDataById(req, res) {
    const id = Number(req.params.id)
    const index = groceriesArr.findIndex(el => el.id === id)        //using findIndex on basis of id we find the correct index

    if (index === -1) {                                             //it shows item does not exist in an array with that id
        return res.status(404).json({ error: "Item not found" })
    }

    groceriesArr.splice(index, 1)                                   //using splice(index, 1) removes the same element
    res.json({ message: "deleted successfully" })
}


function patchGroceryDataById(req, res) {
    const id = +req.params.id
    let update = req.body
    let index = groceriesArr.findIndex(el => el.id === id)
    if (index === -1) {                                             //it shows item does not exist in an array with that id
        return res.status(404).json({ error: "data not found" })
    }
    groceriesArr[index] = { ...groceriesArr[index], ...update }     //...groceriesArr[index] → takes all old fields 
                                                                    //...update → overwrites only the fields sent in req.body
    res.json({ message: "data updated", data: groceriesArr[index] })
}

function putGroceryDataById(req, res) {
    const id = Number(req.params.id)
    let update = req.body
    let index = groceriesArr.findIndex(el => el.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "data not found" })
    }
    groceriesArr[index] = { ...groceriesArr[index], ...update, id }     //PUT + spread old data = PATCH behavior
    res.json({ message: "data updated", data: groceriesArr[index] })
}


module.exports = {
    getALLGrocery,
    getGroceryById,
    postGrocerydata,
    deleteGroceryDataById,
    patchGroceryDataById,
    putGroceryDataById
}