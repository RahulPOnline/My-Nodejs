let kidsArr = require("../models/kids.model")


function getAllkids(req,res){
    res.json(kidsArr)
}



module.exports={
    getAllkids,
    
}