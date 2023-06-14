import express,{Router} from 'express';
import { hostname } from 'os';
import * as path from 'path';

const apiRouter:express.Router=express.Router();
const hostName:string='127.0.0.1';
const port:number=5000;


apiRouter.use('/BMDB',express.static(path.join(__dirname,'BMDB')));


/*
 USAGE:-READ/GET ALL Students
 URL:http://127.0.0.1:5000 
 METHOD:GET
 FIELDS:No-Fields
*/
apiRouter.get('/students',(request:express.Request,response:express.Response)=>
{
 response.status(200).json({msg:"get all student data"})

 });


/*
 USAGE:-READ/GET Single Student
 URL:http://127.0.0.1:5000/students/:stuId
 METHOD:GET
 FIELDS:No-Fields
*/

 apiRouter.get('/students/:stuId',(request:express.Request,response:express.Response)=>
{
    let stuId=request.params.stuId;   
 response.status(200).json({msg:"get a single student data",id:stuId})

 });



 /*
 USAGE:- CREATE OR UPDATE/POST create Student
 URL:http://127.0.0.1:5000/students
 METHOD:POST
 FIELDS:No-Fields
*/

apiRouter.post('/students',(request:express.Request,response:express.Response)=>
{
    
 response.status(200).json({msg:"create a student data"})

 });



  /*
 USAGE:- UPDATE/PUT update a Student
 URL:http://127.0.0.1:5000/students/:stuId
 METHOD:PUT
 FIELDS:No-Fields
*/

apiRouter.put('/students/:stuId',(request:express.Request,response:express.Response)=>
{
    let stuId=request.params.stuId;   
 response.status(200).json({msg:"update a student data",id:stuId})

 });



  /*
 USAGE:- UPDATE/PUT update a Student
 URL:http://127.0.0.1:5000/students/:stuId
 METHOD:DELETE
 FIELDS:No-Fields
*/

apiRouter.delete('/students/:stuId',(request:express.Request,response:express.Response)=>
{
    let stuId=request.params.stuId;   
 response.status(200).json({msg:"delete a student data",id:stuId})

 });



export default apiRouter;

