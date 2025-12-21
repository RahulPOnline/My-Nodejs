const express = require('express')

const app = express()

const myFirstmiddleware = (req, res, next) => {
    console.log('first middleware will run on every request');
    
    next()
}

app.use(myFirstmiddleware)

app.get('/',(req,res)=>{
    res.send('Home page')
})
app.get('/about',(req,res)=>{
    res.send('about page')
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
    
})