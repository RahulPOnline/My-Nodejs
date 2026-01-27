const fs = require("fs")
const { parse } = require("csv-parse")
const path = require("path")

let womensData = []

fs.createReadStream(path.join(__dirname, "..", "..", "data", "WomensProduct.csv"))

    .pipe(parse({
        comment: "#",
        columns: true
    }))

    .on("data", (data) => {
        womensData.push(data)
    })
    .on("error", (error) => {
        console.log("something went wrong", error)
    })
    .on("end", () => {
        // console.log(womensData)
    })

module.exports = womensData