const http=require('http');
const fs = require('fs');
const path=require('path')


const hostName='127.0.0.5';
const port=5000;

const server=http.createServer((request,response)=>
{

  let url=request.url;   // request ni base chesukoni response loni data ni print ayyela cheyali..response willbe works, based on request...         
  console.log(url);       

 response.statusCode=200;
 response.setHeader('content-type','text/html');
   fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data)=>
   {
     if(err)
     {
        console.log(err)
     }
     response.end(data);
   })
    
 
});

server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})