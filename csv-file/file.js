const fs = require('fs')
const { parse } = require('csv-parse')

let carData = []

function onlyFourdoor(data) {
    return data.doornumber == 'four' &&  data.carbody == 'wagon' && data.price <= 10000
}

fs.createReadStream('CarPrice.csv')
    .pipe(parse({
        comment: "#",
        columns: true
    }))

    .on("data", (data) => {
        if(onlyFourdoor(data))
        {
            carData.push(data)
        }
    })

    .on('error', (error) => {
        console.log("something went wrong",error)
    })

    .on('end', () => {
        console.log(carData.map((el,i,arr)=>{
            return el.CarName
        }));

    })