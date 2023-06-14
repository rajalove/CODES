import express,{Application} from "express";
import { request } from "http";
import { send } from "process";
import * as path from "path";
import { IUser } from "./database/IUser";


const app:express.Application=express();

const hostName:string='127.0.0.1'
const port:number=500;

//sendFile method..........
app.get('/home',(Request:express.Request,response:express.Response)=>
{
    response.status(200).sendFile(path.join(__dirname,'view','index.html'));
});
//..........................

//JSON data____________________
let Raja:IUser={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  app.get('/user',(request:express.Request,response:express.Response)=>
  {
      response.status(200).json(Raja);
  })
  //_______________________________________

  
app.listen(port,hostName,()=>
{
    console.log(`Express server is starting at:http://${hostName}:${port}`)
})