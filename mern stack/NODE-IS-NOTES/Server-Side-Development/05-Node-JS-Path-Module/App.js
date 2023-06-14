const fs=require('fs');
const path=require('path');


fs.readFile('./util/data/employee/Employee.json','utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
    else{
        // console.log(data)
        let person=JSON.parse(data);
        console.log(person);
    }
})

//__________________________________________________________________________________________________________________


fs.readFile(path.join(__dirname,'util','data','employee','Employee.json'),'utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
    else{
        // console.log(data)
        let person=JSON.parse(data);
        
        fs.writeFile(path.join(__dirname,'admin','customer','customers.json'),JSON.stringify(person),'utf-8',(err)=>
        {
            if(err){
                throw err;
            }
            else{
                console.log('created file name:customers.json file');
            }
        })
    }
})

//_____________________________________________________________________________________________


let User=[{"sno":1,"name":"murali","age":34,"location":"banglore","work":"not now"},{"sno":2,"name":"mahesh","age":31,"location":"works in kuwait city","work":"electrican"},{"sno":3,"name":"sudheer","age":31,"location":"banglore","work":"sap"},{"sno":4,"name":"karthik","age":21,"location":"thirupati","work":"work in kuwait city+"},{"sno":4,"name":"sunil","age":23,"location":"thirupati","work":"work in kuwait city"}]


fs.writeFile('./user.json',JSON.stringify(User),'utf-8',(err)=>
{
    if(err)
    {
        throw err;
    }
    else{
        // console.log('file created successfully')
        fs.readFile(path.join(__dirname,'user.json'),'utf-8',(err,data)=>
        {
            if(err)
            {
                throw err;
            }
            else{
               let killer=JSON.parse(data);
               console.table(killer);
            }
        })
    }
})