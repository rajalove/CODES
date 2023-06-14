import http from 'http';
import fs from 'fs';
import path from 'path';

const hostName:string='127.0.0.1';
const port:number=5000;

const server:http.Server=http.createServer((request:http.IncomingMessage, response:http.ServerResponse)=>
{

    let url:string|undefined=request.url;
    console.log(url);

    response.statusCode=200;
    response.setHeader('Content-Type','text/html');

    //routing
    if(url==='/')
    {
        fs.readFile(path.join(__dirname,'views','index.html'),'utf-8',(err,data)=>
        {
            if(err)
            {
                throw err;
            }
            else{
                response.end(`${data}`);
            }
        })
    }
    else if(url==='/about')
    {
        fs.readFile(path.join(__dirname,'views','about.html'),'utf-8',(err,data)=>
        {
            if(err)
            {
                throw err;
            }
            else{
                response.end(`${data}`);
            }
        })
    }
    else if(url==='/services')
    {
        fs.readFile(path.join(__dirname,'views','services.html'),'utf-8',(err,data)=>
        {
            if(err)
            {
                throw err;
            }
            else{
                response.end(`${data}`);
            }
        })
    }
    else if(url==='/contact')
    {
        fs.readFile(path.join(__dirname,'views','contact.html'),'utf-8',(err,data)=>
        {
            if(err)
            {
                throw err;
            }
            else{
                response.end(`${data}`);
            }
        })
    }
    else
    {
        fs.readFile(path.join(__dirname,'views','404.html'),'utf-8',(err,data)=>
        {
            if(err)
            {
                throw err;
            }
            else{
                response.end(`${data}`);
            }
        })
    }
});

server.listen(port,hostName,()=>
{
    console.log(`NodeJs Server is Started At http://${hostName}:${port}`)
})