let path = require('path')

function homepage(req,res){
    let add = path.join()

    // res.send()

    res.sendFile(path.join(__dirname,"..","public","image.jpg"))
}

module.exports={
    homepage
}