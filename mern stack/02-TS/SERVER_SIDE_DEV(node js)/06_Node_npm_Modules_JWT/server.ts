import http from 'http';
import jwt from'jsonwebtoken';

const hostName:string='127.0.0.1';
const port:number=5000;

//user data
interface IUser
{
    id:string;
    name:string;
    email:string;
    password:string;
}

const server:http.Server=http.createServer(async(request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    //user Register
    let user:IUser={
        id:'AA101',
        name:'Subham',
        email:'subham111@gmail.com',
        password:'subham@123'
    }
    //create token
    let payload={
        user:{
            id:user.id,
            name:user.name,
            email:user.email
        }
    }

    let token=jwt.sign(payload,'ssshhh');

    //verify token
    let decode=await jwt.verify(token,'ssshhh');


    response.end(`<pre>${token}</pre>
                <pre>${JSON.stringify(decode)}</pre>`);
});

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})