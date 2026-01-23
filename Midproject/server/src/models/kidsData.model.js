const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse')


let kidsData = []

fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'KidsProduct.csv'))

    .pipe(parse({
        comment: "#",
        column: true
    }))

    .on('data', (data) => {
        kidsData.push(data)
    })
    .on('error', (error) => {
        console.log("something went wrong");
    })
    .on('end', () => {
        console.log(kidsData);

    })