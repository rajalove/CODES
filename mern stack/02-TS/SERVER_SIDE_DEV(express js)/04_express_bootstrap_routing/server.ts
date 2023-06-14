import express,{Application} from "express";
import { request } from "http";
import { send } from "process";
import * as path from "path";



const app:express.Application=express();

const hostName:string='127.0.0.1'
const port:number=500;
//configure express for static file.................
app.use('/public',express.static(path.join(__dirname,'public',)));


//sendFile method..........
app.get('/home',(Request:express.Request,response:express.Response)=>
{
    response.status(200).sendFile(path.join(__dirname,'view','index.html'));
});


app.listen(port,hostName,()=>
{
    console.log(`Express server is starting at:http://${hostName}:${port}`)
})