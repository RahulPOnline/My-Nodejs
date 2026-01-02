const express = require('express')
const fileController = require("./controller/file.controller")
const homeRouter = require("./routes/home.routes")
let path = require('path')



const server = express()

server.use((req, res, next) => {
    console.log((Date.now()));
    console.log("middleware is executed");
    next()
})

server.use(express.json())

server.use("/", homeRouter)

let static = express.static(path.join(__dirname,"images"))
server.use("/static",static)

const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})