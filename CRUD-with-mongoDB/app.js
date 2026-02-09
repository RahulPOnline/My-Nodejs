const express = require("express")
const app = express()
const userModel = require("./usermodel")

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/create", async (req, res) => {
    let userCreated = await userModel.create({
        name: "Rahul Sharma",
        username: "rahulsharma",
        email: "rahulsharma@gmail.com"
    })
    res.send(userCreated)
})

app.get("/read", async (req, res) => {
    let users = await userModel.find()
    res.send(users)
})







const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})