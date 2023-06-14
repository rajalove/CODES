const http=require('http');
const bcryptjs=require('bcryptjs');
// const fs=require('fs');
// const path=require('path');

const hostName='127.0.0.1';
const port=5000;

const killer={
    name:'rajasekhar',
    age:'26 years',
    email:'rajasekhar098@gmail.com',
    password:'raj76@loves',
}


const Server=http.createServer((request,response)=>
{

 response.statusCode=200;
 response.setHeader('content-type','text/html');

 //____incrypt______________________________________________

 const salt=bcryptjs.genSaltSync(10);
 const hashedPassword=bcryptjs.hashSync(killer.password,salt)
//  response.end(hashedPassword);

 updatedDetails={
    ...killer,
    password:hashedPassword,  // password with user details>>>>>>>>>>
 }

 response.end(JSON.stringify(updatedDetails));


 //____decrypt_____________________________________________

  const isMatch=bcryptjs.compareSync('raj76@loves',hashedPassword)
  if(isMatch){
    console.log('login successful');
  }
  else{
    console.log('invalid password');
  }

});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})