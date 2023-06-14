import express,{Application} from 'express';
import * as path from 'path';
import { ICar } from './database/ICar';

const app:express.Application=express();
const hostName:string='127.0.0.1';
const port:number=5000;

app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));

app.get('/home',(request:express.Request,response:express.Response)=>
{
    response.status(200).sendFile(path.join(__dirname,'view','index.html'))
})

let anu:ICar={
    modal:'rrl',
    color:'white',
    price:500000,
    rating:'5 star',
}

app.get('/user',(request:express.Request,response:express.Response)=>
{
    response.status(200).json(anu)
})

app.listen(port,hostName,()=>

 console.log(`Express server is starting at:http://${hostName}:${port}`)

);

