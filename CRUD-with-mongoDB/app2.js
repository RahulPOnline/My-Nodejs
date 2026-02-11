const express = require("express")
const app = express()
const productModel = require("./productmodel")


app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/create", async (req, res) => {
    let product = await productModel.create({
        title: "Shoes",
        category: "Footwear",
        price: 999
    })
    res.send(product)
})

app.get("/read", async (req, res) => {
    let product = await productModel.find()
    res.send(product)
})

app.get("/update", async (req, res) => {
    let productUpdate = await productModel.findOneAndUpdate({ category: "Electronics" }, { title: "Keyboard" }, { new: true })
    res.send(productUpdate)
})





const PORT = 5000
app.listen(PORT, () => {
    console.log(`server running at localhost:${PORT}`);
})
