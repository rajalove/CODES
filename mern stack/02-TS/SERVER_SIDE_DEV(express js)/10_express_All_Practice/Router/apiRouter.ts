import express,{response, Router} from'express';
import{request} from'http';
import *as path from 'path';
import{send} from'process';

const apiRouter:express.Router=express.Router();


const hostName:string='127.0.0.1';
const port:number=5000;

//bootstrap static files..................

apiRouter.use('/BMDB',express.static(path.join(__dirname,'BMDB')))



apiRouter.get('/',(request:express.Request,response:express.Response)=>
{
    response.status(200).sendFile(path.join(__dirname,'view','index.html'))
});

export default apiRouter;