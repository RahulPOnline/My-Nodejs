const fs = require("fs")
const { parse } = require("csv-parse")
const path = require("path")

let productsData = []

fs.createReadStream(path.join(__dirname, "..", "..", "data", "Products.csv"))

    .pipe(parse({
        comment: "#",
        columns: true
    }))
    .on("data", (data) => {
        productsData.push(data)
    })
    .on("error", (error) => {
        console.log("something went wrong", error)

    })
    .on("end", () => {
        // console.log(productsData)
    })

module.exports = productsData