const http=require('http');
const os=require('os');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

  const homeDirectory=os.homedir();
  response.write(`homeDirectory: ${homeDirectory}, <br>`)
 
 const Tmemory=os.totalmem();
 response.write(`total memory: ${Tmemory},<br>`);

 const Freememory=os.freemem();
 response.write(`free memory: ${Freememory},<br>`);

 const platform=os.platform();
 response.write(`platform: ${platform},<br>`);

 const Architecture=os.arch();
 response.write(`Architecture: ${Architecture}`);

  response.end();


});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})