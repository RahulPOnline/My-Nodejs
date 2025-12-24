let https = require('https')

let req = https.request("https://fakestoreapi.com/products",(res)=>{            //create an https request

    let data = ""           //Create a variable to store incoming data

    res.on("data",(chunk)=>{
        // console.log("this is chunk",chunk);      //chunk is a Buffer (raw binary data)
        data += chunk.toString()        // convert Buffer to string and append it
    })

    res.on("end",()=>{
        // console.log("data has been received");
        const jsondata = JSON.parse(data)           //parse JSON
        console.log(jsondata);
    })
})

req.end()               //actually sends the request