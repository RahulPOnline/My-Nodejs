const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse')


let kidsData = []

fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'KidsProduct.csv'))

    .pipe(parse({
        comment: "#",
        columns: true
    }))

    .on('data', (data) => {
        kidsData.push(data)
    })
    .on('error', (error) => {
        console.log("something went wrong",error);
    })
    .on('end', () => {
        // console.log(kidsData);
    })

    module.exports=kidsData