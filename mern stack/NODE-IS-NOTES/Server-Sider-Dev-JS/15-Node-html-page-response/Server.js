const http=require('http');
const fs=require('fs');
const path=require('path');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

 const url=request.url;
 console.log(url);           // /favicon.ico in cmd printing this...

 fs.readFile(path.join(__dirname,'page','index.html'),'utf-8',(err,data)=>
 {
   if(err){
    throw err;
   }
   else{
    response.end(data);
   }
 })



});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})