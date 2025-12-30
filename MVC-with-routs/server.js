const express = require('express')
const mensController = require("./controllers/mens.controller")
console.log(mensController);

const server = express()

server.use((req,res,next)=>{
    console.log((Date.now()));
    console.log("middleware is executed");
    next()
})

server.use(express.json())



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

server.get("/mens", mensController.getAllmens)

server.post("/mens", mensController.postMensdata)

server.get("/mens/:id", mensController.getMensDatabyid)

server.delete("/mens/:id", mensController.deleteMenDataById)

server.patch("/mens/:id", mensController.patchMenDataById)






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

server.post("/womens", (req, res) => {
    let entry = req.body

    if(!(entry.title && entry.price))
    {
        res.status(400).json({error:"invalid request"})
    }
    womensArr.push(entry)
    res.status(201).json(womensArr)
})





const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})