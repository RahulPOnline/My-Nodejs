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
server.use(express.static(path.join(__dirname, "public")));
server.set("view engine","hbs")

server.set("views",path.join(__dirname,"views"))

server.get("/view",(req,res)=>{
    res.render("index",{
        title:"title",
        data:"data",
        date: Date.now(),
    })
})


const PORT = 5000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})