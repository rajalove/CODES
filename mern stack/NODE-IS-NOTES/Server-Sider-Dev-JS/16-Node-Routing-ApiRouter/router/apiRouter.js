const fs=require('fs');
const path=require('path');

const mapingapiRouter=(request,response)=>
{
    const url=request.url;

    //__________index page__________________
    if(url==='/'){
        fs.readFile(path.join(__dirname,'..','page','main-page','index.html'),'utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            response.end(data);
        })
    }

    //_________home page_____________________
    else if(url==='/home'){
        fs.readFile(path.join(__dirname,'..','page','html-pages','home.html'),'utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            response.end(data);
        })
    }


    //________about page________________________
   else if(url==='/about'){
        fs.readFile(path.join(__dirname,'..','page','html-pages','about.html'),'utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            response.end(data);
        })
    }

//_________photos____________________________
   else if(url==='/photos'){
        fs.readFile(path.join(__dirname,'..','page','html-pages','photos.html'),'utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            response.end(data);
        })
    }

//_______404 page______________________________-
   else if(url==='/place'){
        fs.readFile(path.join(__dirname,'..','page','html-pages','places.html'),'utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            response.end(data);
        })
    }

    else(url==='/404')
    {
        fs.readFile(path.join(__dirname,'..','page','html-pages','404.html'),'utf-8',(err,data)=>
        {
            if(err){
                throw err;
            }
            response.end(data);
        })
    }

}

module.exports={
    mapingapiRouter,
}