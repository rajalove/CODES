import express,{Application} from 'express';
import { hostname } from 'os';
import * as path from 'path';
import apiRouter from './router/apiRouter';

const app:express.Application=express();
const hostName:string='127.0.0.1';
const port:number=5000;


app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));


//configaration apiRouter.....................
 app.use('/',apiRouter);
//  app.use('/students/:stuId',apiRouter);
 

app.listen(port,hostName,()=>

 console.log(`Express server is starting at:http://${hostName}:${port}`)

);         



