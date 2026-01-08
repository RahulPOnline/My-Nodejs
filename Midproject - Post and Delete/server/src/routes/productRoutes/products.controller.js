const path = require("path")
const fs = require("fs")
const { createObjectCsvWriter } = require("csv-writer")
const { parse } = require("csv-parse")
const prodData = require(path.join(__dirname, "..", "..", "models", "product.model.js"))
const productCSV = path.join(__dirname, "..", "..", "..", "data", "Products.csv")

function getAllProducts(req, res) {
    return res.status(200).json(prodData)
}
function getProductsById(req, res) {
    let id = +req.params.id
    return res.status(200).json(prodData[id - 1])

}
async function postProducts(req, res) {
    let data = req.body
    let productD = []
    const csvWriter = createObjectCsvWriter({
        path: productCSV,
        headers: [

            { id: "id", title: "Id" },
            { id: "name", title: "Name" },
            { id: "description", title: "Description" },
            { id: "brand", title: "Brand" },
            { id: "category", title: "Category" },
            { id: "price", title: "Price" },
        ],
        append: fs.existsSync(productCSV)
    })

    try {
        // const { id, name, description, brand, category, price } = req.body

        await csvWriter.writeRecords([data])

        fs.createReadStream(productCSV)
            .pipe(parse({
                comment: "#",
                columns: true
            }))
            .on("data", (data) => {
                productD.push(data)
            })
            .on("error", (error) => {
                console.log("something went wrong", error)

            })
            .on("end", () => {
                res.json({ message: "Data added to CSV successfully" })
                productD
                // prodData.length = 0
                // prodData.push(...proData)

            })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server ERROR" })
    }

    // res.send(productCSV)
}



module.exports = {
    getAllProducts,
    getProductsById,
    postProducts,
}