const os=require('os');
const fs=require('fs');

let name=os.hostname();
console.log(`this is hostName:${name}`);

let freemb=os.freemem();
console.log(`this is my free mb:${freemb}`)

let fullmb=os.totalmem();
console.log(`this is total memory:${fullmb}`)

let version=os.release();
console.log(`this is version:${version}`);


fs.writeFile('./writing.txt','rajasekhar ips','utf-8',(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('file creation')
    }
})

fs.readFile('./writing.txt','utf-8',(err , data)=>
{
    if(err)
    {
        throw err;
    }
    else{
        console.log(data);
    }
})

fs.readFile('./app.js','utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
    else{
        fs.writeFile('currentApp.js',data,'utf-8',(err)=>
        {
            if(err)
            {
                console.log(err)
            }
            else{
                console.log(data)
            }
        })
    }
})




let geetha='they What is one moral story in English?The Golden Egg The farmer decided to cut the goose and remove all the golden eggs from its stomach. As soon as they killed the bird and opened the .';

fs.writeFile('./data.txt',geetha,'utf-8',(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('file created');
    }
})

let raja=[
    {
        sno:1,
        name:'rajasekhar',
        age:26,
        location:'banglore',
        work:'not now'
    },
    {
        sno:2,
        name:'naresh',
        age:31,
        location:'works in kuwait city',
        work:'electrican'
    },
    {
        sno:3,
        name:'suresh',
        age:31,
        location:'banglore',
        work:'sap'
    },
    {
        sno:4,
        name:'jaya',
        age:20,
        location:'thirupati',
        work:'not work'
    },
]


fs.writeFile('./jsonFiles.json',JSON.stringify(raja),'utf-8',(err)=>
{
    if(err){
        throw err;
    }
    else{
        console.log('json file created name jsonFile.json')
    }
})
