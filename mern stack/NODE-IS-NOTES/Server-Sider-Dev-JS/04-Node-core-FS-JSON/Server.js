const fs=require('fs');
const http=require('http');


const hostName='127.0.0.1';
const port=5000;

let employee= {
        sno:"A1",
        name:'rajasekhar',
        age:"26 years",
        location:'banglore',
        work:'not now'
    } 


const Server=http.createServer((request,response)=>
{
    

 response.statusCode=200;
 response.setHeader('content-type','text/html');

  //json data print in string formate_____________________________
//  response.end(JSON.stringify(employee));



// json file created_______________
fs.writeFile('./raja.json',JSON.stringify(employee),'utf-8',(err)=>
{
    if(err)
    {
        throw err;
    }
    else{
       console.log('json files is created')
    }
})




fs.readFile('./raja.json','utf-8',(err,data)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        const love=JSON.parse(data)
        console.log(love.location);
    }
})




});

Server.listen(port,hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})