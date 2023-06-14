const http=require('http');
const dotenv=require('dotenv');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

 const url=request.url;
 console.log(url)

 //configure the .env file.......................
 dotenv.config({path:'./config/.env'});


 //to read the data from .env file.............................
   const devURL=process.env.DEV_URL;
   console.log(`devURL is: ${devURL}`);

   const mongoLocal=process.env.MONGO_DB_LOCAL;
   console.log(`mongodb Local url is : ${mongoLocal}`)


   const tSecret=process.env.JWT_WEB_SECRET;
   console.log(`jwt web secret : ${tSecret}`);

});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})