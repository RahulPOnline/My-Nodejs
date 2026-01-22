const path = require('path')
const mensData = require(path.join(__dirname,'..','..','models','mensData.model.js'))


function getAllMens(req,res){
    return res.status(200).json(mensData)
}
function getAllMensByid(req,res){
    let id = +req.params.id
    return res.status(200).json(mensData[id])
}

module.exports={
    getAllMens,
    getAllMensByid
}