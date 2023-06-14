const http=require('http');
const fs=require('fs');
const path=require('path');

const hostName='127.0.0.1';
const port=5000;

const notes=[
    {
        name:'rajasekhar',
        age:25,
        sex:'male',
        qualification:'bsc graduate',
    },
    {
        name:'rajasekhar',
        age:25,
        sex:'male',
        qualification:'bsc graduate',
    }
]
const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

 fs.writeFile(path.join(__dirname,'employees','data','employee.json'),JSON.stringify(notes),'utf-8',(err)=>
 {
    if(err){
        throw err;
    }
    else{
       fs.readFile(path.join(__dirname,'employees','data','employee.json'),'utf-8',(err,data)=>
       {
            if(err){
                throw err;
            }
            else{
                const raja=JSON.parse(data)
            //    console.log(raja);
             
             response.end(raja.name)
            }
       })
    }
 })





});

Server.listen(port , hostName,()=> 
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})