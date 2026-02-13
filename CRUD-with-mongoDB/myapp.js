const express = require("express")
const app = express()
const profileModel = require("./profilemodel")

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/create", async (req, res) => {
    let profileCreate = await profileModel.create({
        name: "Rahul",
        age: 27,
        course: "MERN Stack"
    })
    res.send(profileCreate)
})

app.get("/read", async (req, res) => {
    let profileRead = await profileModel.find()
        res.send(profileRead)
})


const PORT = 5000
app.listen(PORT, () => {
    console.log(`server runninng at ${PORT}`)
})