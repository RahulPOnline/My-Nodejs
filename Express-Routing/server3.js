const express = require("express")
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
    {
        id: 2,
        title: "Samsung",
        category: "Mobile",
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

server.get("/", (req, res) => {
    res.send("homepage")
})

server.get("/mens", (req, res) => {
    res.json(mensArr)
})

server.get("/womens", (req, res) => {
    res.json(womensArr)
})

server.get("/:endpoint/:id", (req, res) => {
    let { endpoint, id } = req.params
    let numId = +id

    if (endpoint === "mens") {
        let mensdata = mensArr.find(m => m.id === numId)
        return mensdata ? res.json(mensdata) : res.status(404).json({ error: "data not found" })
    }
    else if (endpoint === "womens") {
        let womensdata = womensArr.find(w => w.id === numId)
        return womensdata ? res.json(womensdata) : res.status(404).json({ error: "data not found" })
    }
    else {
        res.status(404).send("invalid entry")
    }
})

server.post("/mens", (req, res) => {
    const entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(400).json({ error: "invalid entry" })
    }
    entry.id = mensArr.length
    mensArr.push(entry)
    res.status(201).json(entry)
})

server.post("/womens", (req, res) => {
    const entry = req.body
    if (!(entry.title && entry.price)) {
        return res.status(400).json({ error: "invalid entry" })
    }
    entry.id = womensArr.length
    womensArr.push(entry)
    res.status(201).json(entry)
})


const PORT = 5000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})