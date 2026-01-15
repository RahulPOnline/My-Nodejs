const express = require("express");
const server = express();

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
    res.send("home page");
});


// ✅ Get all friends or students
server.get("/:endpoint", (req, res) => {
    const { endpoint } = req.params;

    if (endpoint === "friends") {
        res.json(friends);
    } else if (endpoint === "students") {
        res.json(students);
    } else {
        res.status(404).send("Not found");
    }
});


// ✅ Get friend or student by id
server.get("/:endpoint/:id", (req, res) => {
    const { endpoint, id } = req.params;
    const numericId = Number(id);

    if (endpoint === "friends") {
        const friend = friends.find(f => f.id === numericId);
        return friend
            ? res.json(friend)
            : res.status(404).send("Friend not found");
    }

    if (endpoint === "students") {
        const student = students.find(s => s.id === numericId);
        return student
            ? res.json(student)
            : res.status(404).send("Student not found");
    }

    res.status(404).send("Invalid endpoint");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});











// const express = require('express')

// const server = express()

// let friends = [
//     {
//         id: 1,
//         "name": "rahul",
//         "food": "oats"
//     },
//     {
//         id: 2,
//         "name": "harsh",
//         "food": "samosa"
//     },
//     {
//         id: 3,
//         "name": "utkarsh",
//         "food": "wada pav"
//     },

// ]
// let students = [
//     {
//         id: 1,
//         "name": "shivam",
//         "course": "java"
//     },
//     {
//         id: 2,
//         "name": "karan",
//         "course": "python"
//     },
//     {
//         id: 3,
//         "name": "navven",
//         "course": "c#"
//     },
//     {
//         id: 4,
//         "name": "rajesh",
//         "course": "c++"
//     },

// ]

// server.get("/", (req, res) => {
//     res.send("home page")
// })

// server.get("/:friends" || "/:students", (req, res) => {
//     let end = req.params
//     res.json(end.friends == "friends" ? friends : students)
// })

// server.get("/:endpoint/:Id", (req, res) => {
//     let end = req.params
//     res.statusCode = end.Id > friends.length - 1 ? 404 : 200
//     res.send(friends[+params.friendsId])
// })

// server.get("/:friends/:friendsId", (req, res) => {
//     let params = req.params
//     res.send(end.endpoint == "friends" ? friends[end.Id] : students[end.Id])
// })


// server.get("/:students/:studentsId", (req, res) => {
//     let params = req.params
//     res.send(students[+params.studentsId])
// })



// const PORT = 3000
// server.listen(PORT, () => {
//     console.log(`server started at ${PORT}`);
// })