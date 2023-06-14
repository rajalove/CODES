import http from 'http';
import os from 'os';

const hostName:string='127.0.0.1';
const port:number=5000;
let output='';

const server:http.Server=http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    let totalMemory:number=os.totalmem();//totalmemory of my system
    print(`Total Memory: ${totalMemory}`)

    let freeMemory:number=os.freemem();
    print(`$Free Memory: ${freeMemory}`);

    let computerName:string=os.hostname();
    print(`My Computer Name: ${computerName}`)

    let totalmemory:number=os.totalmem();
    print(`my memory:${totalmemory}`)

    response.end(`<pre style='color:orangered'>${output}</pre>`);
});


let print=(str:string)=>
{
    output+=`${str}\n`
}

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})