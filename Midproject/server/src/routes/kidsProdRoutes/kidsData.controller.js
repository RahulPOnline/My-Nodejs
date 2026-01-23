const path = require('path')
const kidsData = require(path.join(__dirname, '..', '..', 'models', 'kidsData.model.js'))

function getAllkids(req, res) {
    return res.status(200).json(kidsData)
}

function getAllkidsbyid(req, res) {
    let id = +req.params.id
    return res.status(200).json(kidsData[id])
}

module.exports = {
    getAllkids,
    getAllkidsbyid
}
