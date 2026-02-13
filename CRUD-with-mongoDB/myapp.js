const express = require("express")
const app = express()
const profileModel = require("./profilemodel")


app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/create", async (req, res) => {
    let profileCreate = await profileModel.create({
        name: "Raj Sharma",
        age: 29,
        course: "MERN Stack"
    })
    res.send(profileCreate)
})

app.get("/read", async (req, res) => {
    let profileRead = await profileModel.find()
    res.send(profileRead)
})

app.get("/update", async (req, res) => {
    let updateProfile = await profileModel.findByIdAndUpdate({ _id: "698f2883faaf34587f5f3b98" }, { course: "Full Stack" }, { new: true })
    res.send(updateProfile)
})

app.get("/delete", async (req, res) => {
    let deleteProfile = await profileModel.findOneAndDelete({ course: "Full Stack" })
    res.send(deleteProfile)
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`server runninng at ${PORT}`)
})