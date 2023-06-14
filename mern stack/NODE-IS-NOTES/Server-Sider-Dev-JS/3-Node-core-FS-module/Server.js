const http=require('http');
const fs=require('fs');

const hostName='127.0.0.1';
const port=5000;

const Server=http.createServer((request,response)=>
{
 response.statusCode=200;
 response.setHeader('content-type','text/html');


 //sync_________________________________

//  fs.writeFileSync('./data.txt','welcome to my sync world','utf-8');
 
//  let raja=fs.readFileSync('./data.txt','utf-8');
//  response.end(raja);


 //async_________________________

  content='this is rajasekhar.i have somany hidden talents, i dont know what is that, i said its all hidden';

  fs.writeFile('./newFile.txt',content,'utf-8',(err)=>
  {
    if(err)
    {
        response.end(err);
    }
    else{
        console.log(`new file is created succesfully`);
    }

// read this file(newfile.txt)
 fs.readFile('./newFile.txt','utf-8',(err,data)=>
 {
    if(err)
    {
        response.end(err);
    }
    else{
        response.end(data);
    }
 })

 // writing program in chrome same file using(server.js)________
  
//   fs.readFile('./Server.js','utf-8',(err,data)=>
//   {
//     if(err){
//        response.end(err);
//     }
//     else{
//         response.end(data);
//     }

//   })
  })



  // writing program creating saparate file________copy the current program and write to new file "program.txt"__________

  fs.readFile('./Server.js','utf-8',(err,data)=>
  {
    if(err)
    {
        throw err;
    }

    else{
        fs.writeFile('./program.txt',data,'utf-8',(err)=>
        {
            if(err){
                response.end(err);
            }
            else{
                console.log('new file created')
            }
        })
    }
  })
});

Server.listen(port , hostName,()=>
{
    console.log(`Node JS server created at:http://${hostName}:${port}`)
})