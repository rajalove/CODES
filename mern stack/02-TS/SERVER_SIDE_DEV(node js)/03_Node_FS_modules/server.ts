import http from 'http';
import fs from 'fs';
import path from 'path';

const hostName:string='127.0.0.1';
const port:number=5000;

const server:http.Server=http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>
{
    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    //dynamic path taking
    //read file
    fs.readFile(path.join(__dirname,'data','message.txt'),'utf-8',(err,data:string)=>
    {
        if(err)
        {
            throw err;
        }
        fs.writeFile(path.join(__dirname,'data','message.txt'),'utf-8',(err)=>
        {
            if(err)
            {
                throw err;
            }
            print('Data is Written to the file.');
        })
        print(data);
    })

    response.end(`<pre>${output}</pre>`);
});

let output='';
let print=(str:string)=>
{
    output+=`${str}`;
}

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})