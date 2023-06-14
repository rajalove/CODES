import http from 'http';
import bcrypt from 'bcryptjs';

const hostName:string='127.0.0.1';
const port:number=5000;

interface IUSer
{
    name:string;
    email:string;
    password:string;
}

const server:http.Server=http.createServer(async(request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    //user Details
    let user:IUSer={
        name:'Subham',
        email:'subhamshaw16797@gmail.com',
        password:'abc@123'
    }

    let salt=await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(user.password,salt);

    //decode the password
    let isMatch:boolean=await bcrypt.compare('abc@123',user.password)
    if(isMatch)
    {
        print('Login SuccessFul');
    }
    else{
        print('Invalid Password')
    }

    response.end(`<pre style="color:orange">${output}</pre>`);
});

let output:string='';
let print=(str:string)=>
{
    output+=`${str}`
}


server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})