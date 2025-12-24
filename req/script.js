const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{                             //headers
        "Content-Type":"application/json"
    })
    res.end(JSON.stringify({
        id: 1,
        title: "product 1"
    }))
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
    
})