const path = require("path")
const carData = require(path.join(__dirname, "..", "..", "models", "carData.model.js"))

function getAllCarsData(req, res) {
    return res.status(200).json(carData)
}
function getCarsDataById(req, res) {
    let id = +req.params.id
    return res.status(200).json(carData[id])

}




module.exports = {
    getAllCarsData,
    getCarsDataById,
}