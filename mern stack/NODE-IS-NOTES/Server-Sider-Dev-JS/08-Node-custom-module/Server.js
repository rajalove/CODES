const http=require('http');
const DataONe=require('./Practice1/data1');

const hostName='127.0.0.1';
const port=5000;

const server=http.createServer((request,response)=>
{
    response.statusCode=200;
    response.setHeader('content-type','text/html');

    // const raju=DataONe.raja; //wrong method 
    // response.end(raju); 

    const sekhar=JSON.stringify(DataONe.raja);  //correct method
    response.end(sekhar);  


}); 


server.listen(port,hostName,()=>
{
    console.log(`Node Js server is starting at http://${hostName}:${port}`)
})



