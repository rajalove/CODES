const http=require('http');
const fs = require('fs');
const path=require('path')


const hostName='127.0.0.5';
const port=5000;

const server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');
  
 fs.unlinkSync(path.join(__dirname,'raja.txt'),'utf-8',(err)=>   //unlink file is used for deleted data or remove data...
 {
  if(err){
    throw err;
  }
  console.log('file deleted');


 });
});

server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})