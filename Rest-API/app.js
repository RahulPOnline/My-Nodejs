const express = require('express')

const app = express()

app.use(express.json())

let books = [
    {
        id: 1,
        title: 'book 1'
    },
    {
        id: 2,
        title: 'book 2'
    },
]

app.get('/', (req, res) => {
    res.json({
        message: "welcome to bookstore api"
    })
})
app.get('/get', (req, res) => {
    res.json(books)
})

app.get('/get/:id', (req, res) => {
console.log('params:', req.params);
    console.log('id type:', typeof req.params.id);

    const id = Number(req.params.id)
     console.log('parsed id:', id);
    const book = books.find(item => item.id === id)
    if (book) {
        res.status(200).json(book)
    }
    else{
        res.status(404).json({
            message : "book not found try with different id"
        })
    }
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);

})