const fs = require("fs")
const path = require("path")


// sync way
const dataFolder = path.join(__dirname, "data")

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder)
    console.log("data folder created");

}

const filepath = path.join(dataFolder, "test.txt")
fs.writeFileSync(filepath, "Hello Node js")


const readcontentFromFile = fs.readFileSync(filepath, "utf-8")
console.log("file content", readcontentFromFile);


fs.appendFileSync(filepath, "\nThis is new line added")
console.log("new file content added");


//Async way

const asynFilePath = path.join(dataFolder, "async-example.txt")
fs.writeFile(asynFilePath, "Hello, async node js", (err) => {
    if (err) throw err
    console.log("Async file is create successfully");

    fs.readFile(asynFilePath, "utf-8", (err, data) => {
        if (err) throw err
        console.log("async file content", data);

        fs.appendFile(asynFilePath, "\n new line added", (err) => {
            if (err) throw err
            console.log("new line added", data);

            fs.readFile(filepath, "utf-8", (err, updatedData) => {
                if (err) throw err
                console.log("updated file content", updatedData);


            })


        })

    })
})
