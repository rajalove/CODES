const express=require('express');
const router=express.Router();
const path=require('path');


// index page.........
router.get('/',(request,response)=>
{
    response.sendFile(path.join(__dirname,'..','public','index.html'));
})

//product page.....
router.get('/product',(request,response)=>
{
    response.sendFile(path.join(__dirname,'..','views','Product.html'));
})


//details page.....
router.get('/details',(request,response)=>
{
    response.sendFile(path.join(__dirname,'..','views','Details.html'));
})

//contact page.....
router.get('/Contact',(request,response)=>
{
    response.sendFile(path.join(__dirname,'..','views','Contact.html'));
})

//about.....
router.get('/about',(request,response)=>
{
    response.sendFile(path.join(__dirname,'..','views','About.html'));
})


module.exports=router;