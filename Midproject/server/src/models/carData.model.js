const path = require("path")
const fs = require("fs")
const { parse } = require("csv-parse")


let carData = []

fs.createReadStream(path.join(__dirname, "..", "..", "data", "CarPrice.csv"))

    .pipe(                                              //ek stream ka output ko dusre stream ke input me dalna.
        parse({                                         //CSV data ko JavaScript objects me convert karta hai.
            comment: "#",
            columns: true
        }))

    .on("data", (data) => {                             //jab bhi stream me naya chunk/data aaye, ye callback run hoga.
        carData.push(data)
    })
    .on("error", (error) => {                           //agar stream ya parsing me koi problem aaye,
        console.log("something wrong", error);
    })
    .on("end", () => {
        // console.log(carData);

    })

    module.exports=carData