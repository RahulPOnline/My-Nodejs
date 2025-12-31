const express = require('express')
const mensController = require("./controllers/mens.controller")
const womensController = require("./controllers/womens.controller")
const mensRouter = require("./routes/mens.routes");
const womensRouter = require('./routes/womens.routes');
console.log(mensController);

const server = express()

server.use((req, res, next) => {
    console.log((Date.now()));
    console.log("middleware is executed");
    next()
})

server.use(express.json())

server.get("/", (req, res) => {
    res.send(Date.now())
})

server.use("/mens", mensRouter)

server.use("/womens", womensRouter)

// server.get("/womens/:id", (req, res) => {
//     let id = +req.params.id
//     if (id > womensArr.length - 1) {
//         res.status(404).json({ error: "data not found" })
//     }
//     res.send(womensArr[id])
// })

// server.post("/womens", (req, res) => {
//     let entry = req.body

//     if (!(entry.title && entry.price)) {
//         res.status(400).json({ error: "invalid request" })
//     }
//     womensArr.push(entry)
//     res.status(201).json(womensArr)
// })





const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})