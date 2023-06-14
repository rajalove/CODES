const express=require('express');
const app=express();
const path=require('path')

const hostname='127.0.0.1';
const port=5000;

// configure static files..................

app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));   //mdb config

app.use('/Styles',express.static(path.join(__dirname,'Styles')))   //style.css


app.get('/',(request,response)=>
{
    response.send(`<h1>this is too diffcult</h1>`);
})


app.get('/home',(request,response)=>
{
    response.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port,hostname,()=>
{
    console.log(`express js server is starting at: http://${hostname}:${port}`);
})