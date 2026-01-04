const express = require('express')
const server = express()


server.use(express.json())

let mensArr = [
    {
        id: 0,
        title: "white shirt",
        category: "Clothes",
        price: 992
    },
    {
        id: 1,
        title: "Shoes",
        category: "Footwear",
        price: 2000
    },
]
let womensArr = [
    {
        id: 0,
        title: "Saree",
        category: "Clothes",
        price: 1000
    },
    {
        id: 1,
        title: "Salwar",
        category: "Clothes",
        price: 349
    },
    {
        id: 2,
        title: "Heels",
        category: "Footwear",
        price: 349
    },
]
server.get('/', (req, res) => {
    res.send("home page")
})

server.get('/mens', (req, res) => {
    res.json(mensArr)
})

server.get('/mens/:id', (req, res) => {
    let id = +req.params.id

    if (id > mensArr.length - 1) {
        return res.status(404).json({ error: "data not found" })
    }
    res.json(mensArr[id])
})

server.post('/mens', (req, res) => {
    let entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(400).json({ error: "invalid entry" })
    }
    mensArr.push(entry)
    res.status(201).json(mensArr)
})


server.get('/womens', (req, res) => {
    res.json(womensArr)
})

server.get('/womens/:id', (req, res) => {
    let id = +req.params.id
    if (id > womensArr.length - 1) {
        return res.status(404).json({ error: "data not found" })
    }
    res.json(womensArr[id])
})

server.post('/womens', (req, res) => {
    let entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(404).json({ error: "invalid entry" })
    }
    womensArr.push(entry)
    res.status(201).json(womensArr)
})



const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})

