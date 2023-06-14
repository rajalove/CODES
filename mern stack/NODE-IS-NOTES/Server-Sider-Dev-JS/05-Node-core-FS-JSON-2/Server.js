const http=require('http');
const fs=require('fs');
const { parse } = require('path');

const hostName='127.0.0.1';
const port=5000;

const raja=[{
    "sno":"A1",
    "name":"rajasekhar",
    "age":26,
    "location":"banglore",
    "work":"not now"
},
    {
    "sno":"A2",
    "name":"prasad",
    "age":26,
    "location":"banglore",
    "work":"not now"
},
    {
        "sno":"A3",
        "name":"viswa",
        "age":28,
        "location":"tirupathi",
        "work":"data anylist",
    }]


const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','Application/json');

     const rajasekhar=JSON.stringify(raja.toString())
        arr = JSON.parse(rajasekhar);
    response.end(arr);

     
     
});

Server.listen(port ,hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})