const mongoose = require("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/productdata`)

const productSchema = mongoose.Schema({
    title: String,
    category: String,
    price: Number
})

module.exports = mongoose.model("products", productSchema)