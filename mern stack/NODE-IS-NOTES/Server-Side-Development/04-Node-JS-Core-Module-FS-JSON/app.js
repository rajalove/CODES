const fs= require('fs');

let employee=[
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
];


//create / write to new json files

fs.writeFile('./employee.json',JSON.stringify(employee),'utf-8',(err)=>
{
    if(err){
        throw err;
    }
    else{
        console.log('employee data submited');
    }
});

//read the json files content

fs.readFile('./employee.json','utf-8',(err,data)=>
{
    if(err)
    {
        throw err;
    }
    else{
        // console.log(data);
        let employee=JSON.parse(data);
        console.log(employee);
    }
})