const path = require("path")
const womensData=require(path.join(__dirname,"..","..","models","womens.model.js"))

function getAllwomensdata(req,res){
    return res.status(200).json(womensData)
}

function getAllwomensdatabyid(req,res){
    let id = +req.params.id
    return res.status(200).json(womensData[id])
}

module.exports={
    getAllwomensdata,
    getAllwomensdatabyid
}