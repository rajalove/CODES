const http=require('http');
const fs=require('fs');
const path=require('path');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');

    const url=request.url;
    // console.Console.log(url)  // /favicon.ico in cmd printing this...
    
    // fs.readFile(path.join(__dirname,'page','main-page','index.html'),'utf-8',(err,data)=>
    // {
    //   if(err){
    //     throw err;
    //   }
    //   else{
    //     response.end(data)
    //   }
    // })

    if(url==='/'){
      fs.readFile(path.join(__dirname,'page','main-page','index.html'),'utf-8',(err,data)=>
      {
        if(err){
          console.log(err)
        }
        else{
          response.end(data);
        }
      })
    }

  else if(url==='/home'){
    fs.readFile(path.join(__dirname,'page','html-pages','home.html'),'utf-8',(err,data)=>
    {
      if(err){
        throw err;
      }
      else{
        response.end(data)
      }
    })
  }



  else if(url==='/photos'){
    fs.readFile(path.join(__dirname,'page','html-pages','photos.html'),'utf-8',(err,data)=>
    {
      if(err){
        throw err;
      }
      else{
        response.end(data)
      }
    })
  }

  else if(url==='/place'){
    fs.readFile(path.join(__dirname,'page','html-pages','places.html'),'utf-8',(err,data)=>
    {
      if(err){
        throw err;
      }
      else{
        response.end(data)
      }
    })
  }

  else if(url==='/about'){
    fs.readFile(path.join(__dirname,'page','html-pages','about.html'),'utf-8',(err,data)=>
    {
      if(err){
        throw err;
      }
      else{
        response.end(data)
      }
    })
  }
  
else(url==='/404')
 {
  fs.readFile(path.join(__dirname,'page','html-pages','404.html'),'utf-8',(err,data)=>
  {
    if(err){
      throw err;
    }
    else{
      response.end(data)
    }
  })
}
  
  

});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})