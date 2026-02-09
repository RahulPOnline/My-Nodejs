const express = require('express') 
const path = require('path') 

const app = express()

app.set('view engine', 'ejs')

app.set ('views',path.join(__dirname, 'views'))

const products = [
    {
        id : 1,
        title : 'product1'
    },
    {
        id : 2,
        title : 'product2'
    },
    {
        id : 3,
        title : 'product3'
    },
]


app.get('/',(req,res)=>{
    res.render('home',{title : 'Home', products : products})
})
app.get('/about',(req,res)=>{
    res.render('about',{title : 'About'})
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);  
})