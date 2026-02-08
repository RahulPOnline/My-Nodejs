const express = require("express")
const { getAllBooks, getAllBooksById, postBooksData, deleteBooksDataById, patchBooksDataById, putBooksDataById } = require("../controllers/books.controller")
const booksRoutes = express.Router()

booksRoutes.get("/", getAllBooks)
booksRoutes.get("/:id", getAllBooksById)
booksRoutes.post("/", postBooksData)
booksRoutes.delete("/:id", deleteBooksDataById)
booksRoutes.patch("/:id", patchBooksDataById)
booksRoutes.put("/:id", putBooksDataById)

module.exports = booksRoutes