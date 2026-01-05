const path = require('path')

function homePage(req,res){
    res.sendFile(path.join(__dirname,'..','images','photo.jpg'))
}

module.exports={
    homePage
}