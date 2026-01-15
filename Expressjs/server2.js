const express = require("express")
const server = express()


const friends = [
    { id: 1, name: "rahul", food: "oats" },
    { id: 2, name: "harsh", food: "samosa" },
    { id: 3, name: "utkarsh", food: "wada pav" }
];

const students = [
    { id: 1, name: "shivam", course: "java" },
    { id: 2, name: "karan", course: "python" },
    { id: 3, name: "navven", course: "c#" },
    { id: 4, name: "rajesh", course: "c++" }
];

server.get("/", (req, res) => {
    res.send("Home Page")
})

server.get("/:endpoint", (req, res) => {
    let { endpoint } = req.params

    if (endpoint === "friends") {
        res.json(friends)
    }
    else if (endpoint === "students") {
        res.json(students)
    }
    else {
        res.status(404).send("not found")
    }
})

server.get("/:endpoint/:id", (req, res) => {
    let { endpoint, id } = req.params
    let numId = +id

    if (endpoint == "friends") {
        const friend = friends.find(f => f.id === numId)
        return friend ? res.json(friend) : res.status(404).send("friend not found")
    }

    else if (endpoint === "students") {
        const student = students.find(s => s.id === numId)
        return student ? res.json(student) : res.status(404).send("student not found")
    }
    res.status(404).send("Invalid endpoint")

})




const PORT = 3000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})