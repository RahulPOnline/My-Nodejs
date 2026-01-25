const { parse } = require('csv-parse')
const fs = require('fs')

let carData = []

function onlyfourDoor(data) {
    return data.doornumber == "four" && data.carbody == "sedan" && data.price <= 15000
}

fs.createReadStream("CarPrice.csv")
    .pipe(parse({
        comment: '#',
        columns: true,
    }))

    .on('data', (data) => {
        if (onlyfourDoor(data)) {
            carData.push(data)
        }
    })

    .on('error', (error) => {
        console.log("something wrong happend", error);
    })

    .on('end', () => {
        console.log(carData.map((el, i, arr) => {
            return el.CarName
        }));
    })