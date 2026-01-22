async function getAlldata(){
    let data = await fetch("http://localhost:3000/cars")            //fetch() contacts the server and waits for the response.
    let actualdata = await data.json()                              //await pauses the function until the server responds.
    console.log(actualdata);                                        
    
}

getAlldata()


async function getCarsDataById(){
    let data = await fetch("http://localhost:3000/cars/5")
    let actualdata = await data.json()
    console.log(actualdata);
    
}

getCarsDataById()