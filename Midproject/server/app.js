const express = require("express")
const app = express()
const carRoutes = require("./src/routes/carRoutes/carData.routes")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/cars",carRoutes)

app.get('/',(req,res)=>{

res.send("hello world")

})

module.exports=app