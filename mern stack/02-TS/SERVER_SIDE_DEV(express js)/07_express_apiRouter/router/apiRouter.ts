import express,{Router} from 'express';
import { hostname } from 'os';
import * as path from 'path';

const apiRouter:express.Router=express.Router();
const hostName:string='127.0.0.1';
const port:number=5000;


apiRouter.use('/BMDB',express.static(path.join(__dirname,'BMDB')));

apiRouter.get('/',(request:express.Request,response:express.Response)=>
{
 response.status(200).sendFile(path.join(__dirname,'..','view','index.html'));
});

apiRouter.get('/gallery',(request:express.Request,response:express.Response)=>
{
 response.status(200).sendFile(path.join(__dirname,'..','view','gallery.html'));
});

apiRouter.get('/about',(request:express.Request,response:express.Response)=>
{
 response.status(200).sendFile(path.join(__dirname,'..','view','about.html'));
});


export default apiRouter;


