const http=require('http');
const fs=require('fs');
// const path=require('path');

const hostName='127.0.0.1';
const port=5000;

const notes=[
    {
        name:'rajasekhar',
        age:25,
        sex:'male',
        qualification:'bsc graduate',
    },
    {
        name:'rajasekhar',
        age:25,
        sex:'male',
        qualification:'bsc graduate',
    }
]
const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

 fs.readFile('./employees/data/employee.json','utf-8',(err,data)=>
 {
    if(err){
        throw err;
    }
    else{
       console.log('data willbe display')
       response.end(data)
    }
 })





});

Server.listen(port , hostName,()=> 
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})