const express = require('express')

const server = express()

let friends = [
    {
        id: 1,
        "name": "rahul",
        "food": "oats"
    },
    {
        id: 2,
        "name": "harsh",
        "food": "samosa"
    },
    {
        id: 3,
        "name": "utkarsh",
        "food": "wada pav"
    },

]
let students = [
    {
        id: 1,
        "name": "shivam",
        "course": "java"
    },
    {
        id: 2,
        "name": "karan",
        "course": "python"
    },
    {
        id: 3,
        "name": "navven",
        "course": "c#"
    },
    {
        id: 4,
        "name": "rajesh",
        "course": "c++"
    },

]

server.get("/", (req, res) => {
    res.send("home page")
})

server.get("/:friends" || "/:students", (req, res) => {
    let end = req.params
    res.json(end.friends == "friends" ? friends : students)
})

server.get("/:endpoint/:Id", (req, res) => {
    let end = req.params
    res.statusCode = end.Id > friends.length - 1 ? 404 : 200
    res.send(friends[+params.friendsId])
})

server.get("/:friends/:friendsId", (req, res) => {
    let params = req.params
    res.send(end.endpoint == "friends" ? friends[end.Id] : students[end.Id])
})


server.get("/:students/:studentsId", (req, res) => {
    let params = req.params
    res.send(students[+params.studentsId])
})










const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})