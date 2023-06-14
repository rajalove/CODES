const http=require('http');
const routers=require('./router/apiRouter');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

 const url=request.url;
 console.log(url)

routers.mapingapiRouter(request,response);
 
});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})