const http = require('http')

const server = http.createServer()

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


server.on('request', (req, res) => {
    let url = req.url
    if (url == "/friends") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        }).end(JSON.stringify(friends))
    }

    else if (url == "/students") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        }).end(JSON.stringify(students))
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        }).end(JSON.stringify(`cannot get ${url}`))
    }
})


const PORT = 5000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`)

})
