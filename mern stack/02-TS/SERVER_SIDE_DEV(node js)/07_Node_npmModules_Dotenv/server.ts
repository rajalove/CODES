import http from 'http';
import dotenv from 'dotenv';
import gravatar from 'gravatar';
import {v4 as uuidv4} from 'uuid';

//dotenv config
dotenv.config(
    {
        path:'./.env'
    }
);

//user Details
interface IUser{
    id:string
    name:string;
    email:string;
    image:string;
}

const hostName:string='127.0.0.1';
const port:number=5000;

const server:http.Server=http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    //user details
    let user:IUser={
        id:uuidv4(),
        name:'Subham Shaw',
        email:'subhamshaw16797@gmail.com',
        image:''
    }

    //gravatar
    let imageURL=gravatar.url(user.email,
        {
            s:'200',
            r:'pg',
            d:'404'
        })

    user.image=imageURL;

    //dotenv
    let mongoDBURL=process.env.MONGO_DB_LOCAL;
    let jwtSecretKey=process.env.JWT_SECRET_KEY;
    // response.end(`<pre>MongoDBURL: ${mongoDBURL}</pre>
    //             <pre>jwtSecret: ${jwtSecretKey}</pre>`);

    response.end(`<pre>${JSON.stringify(user)}</pre>`)
});

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})