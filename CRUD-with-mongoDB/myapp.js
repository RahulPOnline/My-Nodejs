const express = require("express")
const app = express()
const profileModel = require("./profilemodel")


app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/create", async (req, res) => {
    let profileCreate = await profileModel.create({
        name: "Sham Verma",
        age: 26,
        course: "Dot Net"
    })
    res.send(profileCreate)
})

app.get("/read", async (req, res) => {
    let profileRead = await profileModel.find()
    res.send(profileRead)
})

app.get("/update", async (req, res) => {
    try {
        // let updateProfile = await profileModel.findByIdAndUpdate({ _id: "698f2883faaf34587f5f3b98" }, { course: "Full Stack" }, { new: true })

        let updateProfile = await profileModel.updateMany({ course: "Full Stack" }, { $set: { course: "MERN Stack" } }, { new: true })
        res.send(updateProfile)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get("/delete", async (req, res) => {
    try {
        // let deleteProfile = await profileModel.findOneAndDelete({ course: "Full Stack" })

        let deleteProfile = await profileModel.deleteMany({ course: "Full Stack" })
        res.status(200).json({
            message: "Deleted successfully",
            result: deleteProfile
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error deleting profile",
            error: error.message
        })
    }
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`server runninng at ${PORT}`)
})