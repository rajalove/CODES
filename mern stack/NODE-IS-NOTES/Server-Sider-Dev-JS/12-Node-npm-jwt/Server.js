const http=require('http');
const jwt=require('jsonwebtoken');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

 const url=request.url;
 console.log(url)

 //user...........
 const user={
    id:'abc-gfh-435-3v-54jk54',
    name:'rajasekhar',
    age:26,
    email:'raja@gmail.com',
 }


 //payload...............
 const payload={
    id:user.id,
    name:user.name,
 }

 //secret key(salt).........
 const secretKey='ssshhhh';


 //generate a new token......................
 const token=jwt.sign(payload,secretKey,{expiresIn:3600})
//  response.end(token)


//varify the token...............................
jwt.verify(token,secretKey,(err,decoded)=>
{
   if(err)
   {
      throw err;
   }
   else{
      response.end(JSON.stringify(decoded));
   }
})
 

});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})