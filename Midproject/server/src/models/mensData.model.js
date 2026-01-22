const fs = require('fs')
const path = require("path")
const { parse } = require("csv-parse")

let mensData = []

fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'MensProduct.csv'))

    .pipe(parse({
        comment: "#",
        column: true
    }))

    .on('data', (data) => {
        mensData.push(data)
    })
    .on('error', (error) => {
        console.log("something went wrong", error);
    })
    .on('end', () => {
        // console.log(mensData);
    })

module.exports = mensData

