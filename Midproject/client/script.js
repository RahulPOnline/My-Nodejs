const { act } = require("react");

async function getAlldata() {
    let data = await fetch("http://localhost:3000/cars")            //fetch() contacts the server and waits for the response.
    let actualdata = await data.json()                              //await pauses the function until the server responds.
    console.log(actualdata);

}

// getAlldata()


async function getCarsDataById() {
    let data = await fetch("http://localhost:3000/cars/5")
    let actualdata = await data.json()
    console.log(actualdata);

}

// getCarsDataById()

//================================================================================
//================================================================================

async function getAllMens() {
    let data = await fetch("http://localhost:3000/mens")
    let actualdata = await data.json()
    console.log(actualdata);
}

getAllMens()


async function getAllMensByid() {
    let data = await fetch("http://localhost:3000/mens/10")
    let actualdata = await data.json()
    console.log(actualdata);
}

getAllMensByid()


async function getAllkids() {
    let data = await fetch("http://localhost:3000/kids")
    let actualdata = await data.json()
    console.log(actualdata);
}
getAllkids()

async function getAllkidsbyid() {
    let data = await fetch("http://localhost:3000/kids/3")
    let actualdata = await data.json()
    console.log(actualdata);
}
getAllkidsbyid()


async function getAllwomensdata() {
    let data = await fetch("http://localhost:3000/womens")
    let actData = await data.json()
    console.log(actData)
}

getAllwomensdata()

async function getAllwomensid() {
    let data = await fetch("http://localhost:3000/womens/4")
    let actData = await data.json()
    console.log(actData)
}

getAllwomensid()