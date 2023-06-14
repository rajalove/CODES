import express,{Application} from 'express';
import { hostname } from 'os';
import * as path from 'path';
import apiRouter from './router/apiRouter';


const app:express.Application=express();
const hostName:string='127.0.0.1';
const port:number=5000;


app.use('/BMDB',express.static(path.join(__dirname,'BMDB')));
// app.use('/MDB',express.static(path.join(__dirname,'MDB')));
// apiRouter.use('/view',express.static(path.join(__dirname,'view')));
// app.get('/',(request:express.Request,response:express.Response)=>
// {
//  response.status(200).sendFile(path.join(__dirname,'view','index.html'));
// });

//configure apiRouter.......................

// app.get('/',(request:express.Request,response:express.Response)=>
// {
//  response.status(200).sendFile(path.join(__dirname,'view','index.html'));
// });

// app.get('/gallery',(request:express.Request,response:express.Response)=>
// {
//  response.status(200).sendFile(path.join(__dirname,'view','gallery.html'));
// });

// app.get('/about',(request:express.Request,response:express.Response)=>
// {
//  response.status(200).sendFile(path.join(__dirname,'view','about.html'));
// });


//configure apiRouter short cut easy method.....


 app.use('/',apiRouter);
 app.use('/gallery',apiRouter);
 app.use('/about',apiRouter);


app.listen(port,hostName,()=>

 console.log(`Express server is starting at:http://${hostName}:${port}`)

);