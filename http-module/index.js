const http = require('http')
const fs = require('fs')

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
    let params = req.url.split("/")
    let method = req.method
    console.log(method);

    if (method == "GET" && params[1] == "friends" && params[2] != undefined) {
        res.end(JSON.stringify(friends[params[2] - 1]))
    }

    else if (method == "POST" && params[1] == "friends" && params[2] == undefined) {
        req.on("data", (data) => {
            let abc = data.toString()
            fs.appendFile('data.txt', abc, (err) => {
                console.log(err);
            })
        })
        res.end()
    }

    // else if (method == "PUT" && params[1] == "friends" && params[2] == undefined) {
    //     req.on("data", (data) => {
    //         let abc = data.toString()
    //         fs.rename('data.txt', abc, (err) => {
    //             console.log(err);
    //         })
    //     })
    //     res.end()
    // }

    // else if (method == "DELETE" && params[1] == "friends" && params[2] == undefined) {
    //     req.on("data", (data) => {
    //         let abc = data.toString()
    //         fs.unlink('data.txt', (err) => {
                
    //         })
    //     })
    //     res.end()
    // }

    else if (method == "GET" && params[1] == "students" && params[2] != undefined) {
        res.end(JSON.stringify(students[params[2] - 1]))
    }

    else if (method == "GET" && params[1] == "friends" && params[2] == undefined) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        }).end(JSON.stringify(friends))
    }

    else if (method == "GET" && params[1] == "students" && params[2] == undefined) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        }).end(JSON.stringify(students))
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        }).end(JSON.stringify(`cannot ${method} ${params}`))
    }
})


const PORT = 5000
server.listen(PORT, () => {
    console.log(`server started at ${PORT}`)

})
