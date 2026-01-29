const fs = require('fs')
const { parse } = require('csv-parse')

let productData = []

function filterData(data) {
    return data.category == "Fashion" && data.stock > 20 && data.price < 100
}

fs.createReadStream('ProductsData.csv')

    .pipe(parse({
        comment: "#",
        columns: true
    }))

    .on("data", (data) => {
        if(filterData(data))
        {
            productData.push(data)
        }
    })
    .on("error", (error) => {
        console.log("something wrong happend", error)
    })
    .on("end", () => {
        console.log(productData.map((el)=>{
            return el
        }))
    })