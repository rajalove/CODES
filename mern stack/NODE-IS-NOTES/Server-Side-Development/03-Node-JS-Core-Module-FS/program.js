const fs = require('fs');

/* 
//sync...............

//create a file 

fs.writeFileSync('notes.txt','welcome to node JS','utf-8');

//read from the file

let contents=fs.readFileSync('notes.txt','utf-8');
console.log(contents);

*/





//async.........................

//create a file....

let contents='Listen to stories of people developing their leadership skills and enabling communities. Listen to Faces of Change Podcast with Marshall Ganz about leadership and organizing.Changemaker Resources. Create Change. Develop Leadership.';

 fs.writeFile('./data.txt',contents,'utf-8',(err)=>
 {

 if(err) throw err;
 console.log('data is writen a file');

 })


 //read a file...

 fs.readFile('./data.txt','utf-8',(err , data)=>
 {
if(err){
    throw err;
}
else{
    console.log(data);

}

 });



 //copy the current program and write to new file "program.js"



 fs.readFile('./app.js','utf-8',(err,data)=>
 {
if(err){
    throw err;
}
else{
    // console.log(data)
    fs.writeFile('./program.js',data,'utf-8',(err)=>
    {
        if(err)
        {
            throw err;
        }
        else{
            console.log('data is done');
        }
    })
}
 })