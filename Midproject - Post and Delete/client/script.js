async function getAlldata(){
    let data = await fetch("http://localhost:3000/cars")
    let actualdata = await data.json()
    console.log(actualdata);
    
}

getAlldata()


async function getCarsDataById(){
    let data = await fetch("http://localhost:3000/cars/5")
    let actualdata = await data.json()
    console.log(actualdata);
    
}

getCarsDataById()