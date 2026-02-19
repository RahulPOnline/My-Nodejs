let booksArr = require("../models/books.model")

function getAllBooks(req, res) {
    res.json(booksArr)
}

function getAllBooksById(req, res) {
    let id = Number(req.params.id)

    if (Number.isNaN(id)) {
        return res.status(400).json({ error: "Invalid id" })
    }

    const book = booksArr.find(el => el.id === id)
    if (!book) {
        return res.status(404).json({ error: "Data not found" })
    }
    res.json(book)
}

function postBooksData(req, res) {
    const entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(400).json({ error: "Invalid entry" })
    }
    entry.id = booksArr.length
    booksArr.push(entry)
    res.status(201).json(entry)
}

function deleteBooksDataById(req, res) {
    const id = Number(req.params.id)
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: "Invalid id" })
    }
    const index = booksArr.findIndex(el => el.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "Resorce does'nt exist" })
    }
    booksArr.splice(index, 1)
    res.json({ message: "deleted successfully" })
}

function patchBooksDataById(req, res) {
    const id = Number(req.params.id)
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: "Invalid id" })
    }
    const update = req.body
    const index = booksArr.findIndex(el => el.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "Data not found" })
    }
    booksArr[index] = { ...booksArr[index], ...update }
    res.json({ message: "Data updated", data: booksArr[index] })
}

function putBooksDataById(req, res) {
    const id = Number(req.params.id)
    const update = req.body
    const index = booksArr.findIndex(el => el.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "Data not found" })
    }
    booksArr[index] = { ...update, id }
    res.json({ message: "Data updated", data: booksArr[index] })
}


module.exports = {
    getAllBooks,
    getAllBooksById,
    postBooksData,
    deleteBooksDataById,
    patchBooksDataById,
    putBooksDataById
}