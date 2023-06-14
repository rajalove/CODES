const express=require('express');   //load the express
const app = express();      //to initilize the express
const path = require('path');   

const hostname='127.0.0.1';
const port=5000;


//configure static files............

app.use('/MDB',express.static(path.join(__dirname,'public','MDB')));   //mdb file configuration.........
app.use('/pages',express.static(path.join(__dirname,'pages')));   //styles.css files configuration.......................



//  for html tag........

app.get('/',(request,response)=>
{
   response.send(`<h1> welcome to express Js </h1>`);

});


app.get('/homes',(request,response)=>
{ 
    response.sendFile(path.join(__dirname,'pages','index.html')); 
})



app.listen(port,hostname,()=>
{

    console.log(`Express server is starting at http://${hostname}:${port}`);

});

