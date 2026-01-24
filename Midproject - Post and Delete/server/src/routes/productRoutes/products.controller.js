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
    // let productD = []
    const csvProducts = []
    const fileExists = fs.existsSync(productCSV)


    const record = {
        id: data.Id || data.id,
        name: data.Name || data.name,
        description: data.Description || data.description,
        brand: data.Brand || data.brand,
        category: data.Category || data.category,
        price: data.Price || data.price
    }

    const csvWriter = createObjectCsvWriter({
        path: productCSV,
        header: [
            { id: "id", title: "Id" },
            { id: "name", title: "Name" },
            { id: "description", title: "Description" },
            { id: "brand", title: "Brand" },
            { id: "category", title: "Category" },
            { id: "price", title: "Price" },
        ],
        append: fileExists,
        // recordDelimiter: '\n'
    })

    try {
        await csvWriter.writeRecords([record])

        fs.createReadStream(productCSV)
            .pipe(parse({
                columns: true,
                skip_empty_lines: true,
                relax_column_count: true,
                trim: true,
            }))
            .on("data", (data) => {
                csvProducts.push(data)
            })
            .on("error", (error) => {
                console.log("something went wrong", error)
                res.status(500).json({ error: "CSV read failed" })
            })
            .on("end", () => {
                prodData.length = 0
                prodData.push(...csvProducts)
                res.json({
                    message: "Data added to CSV successfully",
                    productData: csvProducts
                })
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