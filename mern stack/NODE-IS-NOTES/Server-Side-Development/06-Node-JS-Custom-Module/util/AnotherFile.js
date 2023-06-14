const fs=require('fs');

let lover=(fileName,content)=>
{
    fs.writeFile(fileName,content,'utf-8',(err)=>
    {
        if(err)
        {
            throw err;
        }
        console.log('data is writen to saperate file');
    })
};

module.exports={
    lover
}