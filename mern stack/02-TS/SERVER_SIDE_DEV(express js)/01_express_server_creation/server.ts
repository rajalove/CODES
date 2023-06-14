import express,{Application} from "express";
import { request } from "http";
import { send } from "process";


const app:express.Application=express();

const hostName:string='127.0.0.1'
const port:number=5000;

app.get('/',(Request:express.Request,response:express.Response)=>
{
    response.status(200).send(`<h1>HI EXPRESS JS</h1>`);
});

app.listen(port,hostName,()=>
{
    console.log(`Express server is starting at:http://${hostName}:${port}`)
})