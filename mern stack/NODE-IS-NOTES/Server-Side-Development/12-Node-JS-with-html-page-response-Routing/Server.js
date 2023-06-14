const http=require('http');
const fs = require('fs');
const path=require('path')


const hostName='127.0.0.5';
const port=5000;

const server=http.createServer((request,response)=>
{

  let url=request.url;   // request ni base chesukoni response loni data ni print ayyela cheyali..response willbe works, based on request...         
  console.log(url);       

 response.statusCode=200;
 response.setHeader('content-type','text/html');
  
 //index page..........................

 if(url==='/')
{
  fs.readFile(path.join(__dirname,'views','index.html'),'utf-8',(err,data)=>
  {
    if(err)
    {
       console.log(err)
    }
    response.end(data);
  })
}


//about page.....................................
else if(url==='/about')
{
  fs.readFile(path.join(__dirname,'views','about.html'),'utf-8',(err,data)=>
  {
    if(err)
    {
       console.log(err)
    }
    response.end(data);
  })
}


//contact page............................
else if(url==='/contact')
{
  fs.readFile(path.join(__dirname,'views','contact.html'),'utf-8',(err,data)=>
{
  if(err)
  {
     console.log(err)
  }
  response.end(data);
})
}


//services page.............................
else if(url==='/services')
{
  fs.readFile(path.join(__dirname,'views','services.html'),'utf-8',(err,data)=>
{
  if(err)
  {
     console.log(err)
  }
  response.end(data);
})
}


//404 page.............................................
else(url==='/404')
{
  fs.readFile(path.join(__dirname,'views','404.html'),'utf-8',(err,data)=>
{
  if(err)
  {
     console.log(err)
  }
  response.end(data);
})
}
    
 
});

server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})