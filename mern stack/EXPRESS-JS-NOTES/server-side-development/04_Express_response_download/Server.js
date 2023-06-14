const express=require('express');   //load the express
const app = express();      //to initilize the express
const path = require('path');   

const hostname='127.0.0.1';
const port=5000;


//  for html tag........

app.get('/',(request,response)=>
{
   response.send(`<h1> welcome to express Js </h1>`);

});

//JSON data..........

app.get('/Story',(request,response)=>
{ 
    response.download(path.join(__dirname,'HumanStory.pdf'));    //pdf file download method.............
})



app.listen(port,hostname,()=>
{

    console.log(`Express server is starting at http://${hostname}:${port}`);

});

