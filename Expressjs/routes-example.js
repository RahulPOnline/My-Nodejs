const express = require('express')

const app = express()
console.log("SERVER FILE RUNNING");

app.get('/', (req, res) => {
    res.send('Welcome to home page')
})

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            category: "footwear"
        },
        {
            id: 2,
            category: "clothes"
        },
        {
            id: 3,
            category: "Mobiles"
        }
    ]
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    console.log("req params", req.params);

    const productId = parseInt(req.params.id)
    
    const products = [
        {
            id: 1,
            category: "footwear"
        },
        {
            id: 2,
            category: "clothes"
        },
        {
            id: 3,
            category: "Mobiles"
        }
    ]
    const singleProduct = products.find(product => product.id === productId)

    if (singleProduct) {
        res.json(singleProduct)
    }
    else {
        res.status(404).send('product is not found')
    }
})


const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})