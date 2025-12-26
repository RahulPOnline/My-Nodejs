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
    // let params = req.url.split('/')              //by using split method
    // console.log(params);                         
    
    if (req.url == "/friends") {                    //by using '/'
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(friends))

    }

    else if (req.url == "/students") {              //by using '/'
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(students))

    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" }).end(`cannot get ${req.url}`)
    }
})


const PORT = 3000

server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);

})
