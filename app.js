const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use(express.static('public'));


app.listen(3000, ()=> console.log('servidor corriendo en http://localhost:3000'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'))
});

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/register.html'))
});