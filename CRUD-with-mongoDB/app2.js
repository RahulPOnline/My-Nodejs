const express = require("express")
const app = express()
const productModel = require("./productmodel")


app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/create", async (req, res) => {
    let product = await productModel.create({
        title: "Sneaker",
        category: "Footwear",
        price: 2499
    })
    res.send(product)
})

app.get("/read", async (req, res) => {
    let product = await productModel.find()
    res.send(product)
})

app.get("/update", async (req, res) => {
    let productUpdate = await productModel.findOneAndUpdate({ _id: "698c433fd62b62c4e6b59fdb"}, { price: "10000" }, { new: true })
    res.send(productUpdate)
})

app.get("/delete", async (req, res) => {
    let productDelete = await productModel.deleteMany({ category: "Clothes" })
    // let productDelete = await productModel.findOneAndDelete({ title: "Shoes" })
    res.send(productDelete)
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running at localhost:${PORT}`);
})
