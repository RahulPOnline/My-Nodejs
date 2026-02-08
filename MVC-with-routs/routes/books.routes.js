const express = require("express")
const { getAllBooks, getAllBooksById } = require("../controllers/books.controller")
const booksRoutes = express.Router()

booksRoutes.get("/", getAllBooks)
booksRoutes.get("/:id", getAllBooksById)

module.exports = booksRoutes