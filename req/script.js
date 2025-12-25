const http = require('http')

const server = http.createServer((req, res) => {
    // res.writeHead(200,{                             //headers
    //     "Content-Type":"application/json"
    // })
    // res.end(JSON.stringify({
    //     id: 1,
    //     title: "product 1"
    // }))

    if (req.url == "/abcd") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        res.end(JSON.stringify({
            id: 1,
            name: "abcd",
            url: 'www'
        }))
    }
    else if (req.url == "/xyz") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify({
            id: 1,
            name: "homepage"
        }))

    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Not Found")
    }

})


server.listen(PORT, () => {
    console.log(`server started at ${PORT}`)

})