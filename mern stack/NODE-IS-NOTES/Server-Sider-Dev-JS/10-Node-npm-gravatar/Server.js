const http=require('http');
const bcryptjs=require('bcryptjs');
const gravatar=require('gravatar');


const hostName='127.0.0.1';
const port=5000;

const user={
    name:'rajasekhar',
    age:'26 years',
    email:'rajasekharkoneti3@gmail.com',
    password:'raj76@loves',
}

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

/*  //____gravatar______________________________________
 const images=gravatar.url(user.email,{
  s:'200',
  r:'pg',
  d:'mm',
 })

 response.end(images)*/




//______gravatar with incrypt_________________

const salt=bcryptjs.genSaltSync(10);
const hashedPassword=bcryptjs.hashSync('user.password',salt);

const photo=gravatar.url(user.email,{
  s:'200',
  r:'pg',
  d:'mm',

})

const updatedDetails={
  ...user,
  image: photo,
  password:hashedPassword,
}

response.end(JSON.stringify(updatedDetails))

});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})