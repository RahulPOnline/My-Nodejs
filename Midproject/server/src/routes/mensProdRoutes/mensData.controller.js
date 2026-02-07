const path = require('path')
const mensData = require(path.join(__dirname,'..','..','models','mensData.model.js'))

function getAllMensData(req,res){
    return res.status(200).json(mensData)
}
function getAllMensDataByid(req,res){
    let id = +req.params.id
    return res.status(200).json(mensData[id])
}

module.exports={
    getAllMensData,
    getAllMensDataByid
}