const path = require('path')

function homePage(req,res){
    res.sendFile(path.join(__dirname,'..','images','image.jpg'))
}

module.exports={
    homePage
}