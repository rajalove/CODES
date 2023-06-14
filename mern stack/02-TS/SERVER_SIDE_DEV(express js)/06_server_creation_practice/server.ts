import express,{Application}from 'express';
import { request } from 'http';
import * as path from'path';

const app:express.Application=express();
const hostName:string='127.0.0.1';
const port:number=5000;

app.use('/MDB',express.static(path.join(__dirname,'MDB')));

//sendFile method..........
app.get('/home',(Request:express.Request,response:express.Response)=>
{
    response.status(200).sendFile(path.join(__dirname,'view','index.html'));
});
  //download meothod...........
app.get('/view',(Request:express.Request,response:express.Response)=>
{
    response.status(200).download(path.join(__dirname,'view','index.html'));
});

app.listen(port,hostName,()=>
  console.log(`Express server file is starting at:http://${hostName}:${port}`)
);



