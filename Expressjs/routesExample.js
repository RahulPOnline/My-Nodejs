const express = require("express")
const app = express()



app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            category: "Fashion",
            title: "Jeans"
        },
        {
            id: 2,
            category: "Office",
            title: "Mouse"
        },
        {
            id: 3,
            category: "Electronics",
            title: "Mobile"
        }
    ]
    res.send(products)
})

app.get("/products/:id", (req, res) => {
    const prodId = parseInt(req.params.id)

    const products = [
        {
            id: 1,
            category: "Fashion",
            title: "Jeans"
        },
        {
            id: 2,
            category: "Office",
            title: "Mouse"
        },
        {
            id: 3,
            category: "Electronics",
            title: "Mobile"
        }
    ]
    const singleProduct = products.find(products => products.id == prodId)

    if (singleProduct) {
        res.json(singleProduct)
    }
    else {
        res.status(404).json({ error: "product is not found" })
    }
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})