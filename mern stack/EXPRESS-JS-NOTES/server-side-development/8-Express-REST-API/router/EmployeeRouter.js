
const express=require('express');
const router=express.Router();

 const uuid=require('uuid');

let Allemployees=[{
    "id": "A1",
    "first_name": "Noelani",
    "last_name": "Langrish",
    "email": "nlangrish0@ca.gov",
    "gender": "Genderqueer",
    "ip_address": "82.10.27.75",
  }, 
  {
    "id": "A2",
    "first_name": "Darla",
    "last_name": "Bradly",
    "email": "dbradly1@amazon.de",
    "gender": "Female",
    "ip_address": "48.106.49.216",
  },
   {
    "id": "A3",
    "first_name": "Kati",
    "last_name": "Domini",
    "email": "kdomini2@jugem.jp",
    "gender": "Female",
    "ip_address": "135.178.207.98",
  }, 
  {
    "id": "A4",
    "first_name": "Lorie",
    "last_name": "Iacovazzi",
    "email": "liacovazzi3@go.com",
    "gender": "Female",
    "ip_address": "234.197.123.10",
  }, 
  {
    "id": "A5",
    "first_name": "Raynor",
    "last_name": "Scantlebury",
    "email": "rscantlebury4@mac.com",
    "gender": "Male",
    "ip_address": "107.14.185.238",
  }];



/*
  @usage : Get all employees
  @url   : http://127.0.0.1:5000/api/employees
  @fields: no-fields
  @method: GET
  @access: PUBLIC
 */
router.get('/employees',(request,response)=>
{
    response.status(200).json(Allemployees);
});



/*
  @usage : Get single employee id
  @url   : http://127.0.0.1:5000/api/employees/:empId
  @fields: no-fields
  @method: GET
  @access: PUBLIC
 */
 
router.get('/employees/:empId',(request,response)=>
{
  let employeeId=request.params.empId;
  let selectedEmployee=Allemployees.find((anitha)=>
    {
    return anitha.id===employeeId
  })
  response.status(200).json(selectedEmployee)
  
  // if(selectedEmployee!=undefined) {
  //   response.status(200).json({selectedEmployee})
  //  }

})


 

/*
  @usage : create an employee
  @url   : http://127.0.0.1:5000/api/employees
  @fields: first_name ,last_name, email, gender,ip_address
  @method: POST
  @access: PUBLIC
 */
router.post('/employees',(request,response)=>
{
  // let {first_name,last_name,email}=request.body;

  let newEmployee={                               //form data receiving method(created new employee)
        id:uuid.v4(),                             //create uuid(id)
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address,
  }
  Allemployees.push(newEmployee)
  response.status(200).json({
    // single:newEmployee,
    msg:'employee created successfully',
  })
})



/*
  @usage : update an employee
  @url   : http://127.0.0.1:5000/api/employees/:empId
  @fields: update
  @method: PUT
  @access: PUBLIC
 */
router.put('/employees/:empId',(request,response)=>
{
  let employeeId=request.params.empId;

  let newEmployee={                             
        id:employeeId,             
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address,
  }
let removableIndex = Allemployees.map(single => single.id).indexOf(employeeId)
if(employeeId !== -1){
  Allemployees.splice(removableIndex,1,newEmployee);
}
response.status(200).json({msg:'Employee is Updated'});
});



/*
  @usage : delete an employee
  @url   : http://127.0.0.1:5000/api/employees/:empId
  @fields: delete
  @method: DELETE
  @access: PUBLIC
 */
  router.delete('/employees/:empId',(request,response)=>
  {
    let employeeId=request.params.empId;

  let removableIndex = Allemployees.map(single => single.id).indexOf(employeeId)
  if(employeeId !== -1){
    Allemployees.splice(removableIndex,1);
  }
  response.status(200).json({msg:'Employee is deleted'});
  });



module.exports=router;