const express = require('express')
const server = express()

server.use((req,res,next)=>{
    console.log((Date.now()));
    console.log("middleware is executed");
    next()
})

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

server.get("/", (req, res) => {
    res.send(Date.now())
})

server.get("/mens", (req, res) => {
    res.json(mensArr)
})

server.get("/mens/:id", (req, res) => {
    let id = +req.params.id
    if (id > mensArr.length - 1) {
        res.status(404).json({ error: "data not found" })
    }
    res.send(mensArr[id])
})

server.post("/mens", (req, res) => {
    let entry = req.body
    mensArr.push(entry)
    res.status(201).json(mensArr)
})

server.get("/womens", (req, res) => {
    res.json(womensArr)
})

server.get("/womens/:id", (req, res) => {
    let id = +req.params.id
    if (id > womensArr.length - 1) {
        res.status(404).json({ error: "data not found" })
    }
    res.send(womensArr[id])
})







const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})