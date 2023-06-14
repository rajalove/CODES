import http from 'http';
import * as str from './util/strOperation';

const hostName:string='127.0.0.1';
const port:number=5000;

const server:http.Server=http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    //reverse String
    let message:string="Good Morning";
    let rev:string=str.reverseStr(message);
    print(rev);

    //addition of numbers
    let additionNumbers:number=str.add(10,20);
    print(additionNumbers);

    response.end(`<pre style="color:orangered">${output}</pre>`);
});

let output:string='';
let print=(str:string|number)=>
{
    output+=`${str}`
}

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})