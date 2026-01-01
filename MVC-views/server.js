const express = require('express')
const fileController = require("./controller/file.controller")
const fileRouter = require("./routes/home.routes")


const server = express()

server.use((req, res, next) => {
    console.log((Date.now()));
    console.log("middleware is executed");
    next()
})

server.use(express.json())

server.use("/", fileRouter)



const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})