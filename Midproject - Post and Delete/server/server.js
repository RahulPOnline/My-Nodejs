const http = require("http")
const app = require("./app")

let server = http.createServer(app)


const PORT = 3000

server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})