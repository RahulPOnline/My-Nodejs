const path = require("path")
const fs = require("fs")
const { parse } = require("csv-parse")


let carData = []

fs.createReadStream(path.join(__dirname, "..", "..", "data", "CarPrice.csv"))

    .pipe(
        parse({
            comment: "#",
            columns: true
        }))

    .on("data", (data) => {
        carData.push(data)
    })
    .on("error", (error) => {
        console.log("something wrong", error);
    })
    .on("end", () => {
        // console.log(carData);

    })

    module.exports=carData