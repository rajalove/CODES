import express,{Application} from"express";
import {send} from"process";
import { request } from "http";
import * as path from "path";
import apiRouter from'./Router/apiRouter';

const app:express.Application=express();

const hostName:string='127.0.0.1';
const port:number=5000;

// //static files configaration...............

//  app.use('/BMDB',express.static(path.join(__dirname,'BMDB',)));
//  app.use('/assets',express.static(path.join(__dirname,'assets',)));

// // app.get('/home',(Request:express.Request,response:express.Response)=>
// // {
// // response.status(200).sendFile(path.join(__dirname,'view','index.html'));
// // });


// app.use('/',apiRouter);
// app.use('/gallery',apiRouter);
// app.use('/about',apiRouter);


app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));



app.listen(port,hostName,()=>
{
    console.log(`express js server is starting at:http://${hostName}:${port}`)
});


