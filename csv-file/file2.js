const fs = require('fs')
const {parse} = require('csv-parse')

let productData=[]

fs.createReadStream('ProductsData.csv')

.pipe(parse({
    comment:"#",
    columns:true
}))

