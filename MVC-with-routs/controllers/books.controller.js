let booksArr = require("../models/books.model")

function getAllBooks(req, res) {
    res.json(booksArr)
}

function getAllBooksById(req, res) {
    let id = Number(req.params.id)
    if (Number.isNaN(id) || id < 0 || id > booksArr.length) {
        return res.status(404).json({ error: "data not found" })
    }
    res.json(booksArr[id])
}






module.exports = {
    getAllBooks,
    getAllBooksById,
}