const http=require('http');
const fs = require('fs');
const path=require('path')


const hostName='127.0.0.5';
const port=5000;

const server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');
  
 fs.appendFileSync(path.join(__dirname,'data.txt'),'my life my rules','utf-8',(err)=>   //add some data , inside file data.txt file ...
 {
  if(err){
    throw err;
  }
  console.log('add some text in data file');

 });
});

server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})