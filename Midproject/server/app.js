const express = require("express")
const app = express()
const carRoutes = require("./src/routes/carRoutes/carData.routes")
const mensRoutes = require("./src/routes/mensProdRoutes/mensData.routes")
const kidsRoutes = require('./src/routes/kidsProdRoutes/kidsData.routes')
const womensRoutes = require("../server/src/routes/womensProdRoutes/womensData.routes")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.use("/cars",carRoutes)
app.use("/mens",mensRoutes)
app.use("/kids",kidsRoutes)
app.use("/womens",womensRoutes)

app.get('/',(req,res)=>{

res.send("hello world")

})

module.exports=app