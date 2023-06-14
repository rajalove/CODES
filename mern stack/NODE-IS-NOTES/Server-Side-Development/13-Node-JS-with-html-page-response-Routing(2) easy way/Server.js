const http=require('http');
const routers=require('./router/apiRouter')


const hostName='127.0.0.5';
const port=5000;

const server=http.createServer((request,response)=>
{

  let url=request.url;   // request ni base chesukoni response loni data ni print ayyela cheyali..response willbe works, based on request...         
  console.log(url);       

 response.statusCode=200;
 response.setHeader('content-type','text/html');
  
  
 routers.mapingRouter(request,response);
 
});

server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})