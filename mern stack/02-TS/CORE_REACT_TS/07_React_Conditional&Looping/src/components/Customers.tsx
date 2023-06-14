// import React from "react";
// import { CustomerStore, ICustomer } from "./CustomerStore";

// interface IProps
// {

// }

// interface IState
// {
//     customers:ICustomer[];
// }

// class Customers extends React.Component<IProps,IState>
// {
//     // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//     constructor (props:IProps)
//     {
//         super(props)
//         this.state={
//             customers:CustomerStore.customerData
//         }
//     }
//    render()
//     {
//         return(
//         <React.Fragment>
//             <section className="mt-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <h2 className="text-primary">Customer Details</h2>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum numquam molestias delectus natus possimus, modi fugit nostrum tempore maxime inventore officiis assumenda similique sunt minima mollitia id nobis minus?</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="mt-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <table className="table table-hover table-primary text-center">
//                                 <thead>
//                                     <tr>
//                                         <th>Sno</th>
//                                         <th>Image</th>
//                                         <th>Name</th>
//                                         <th>Age</th>
//                                         <th>Email</th>
//                                         <th>Location</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         this.state.customers.map((customer)=>
//                                         {
//                                             return(
//                                                 <tr>
//                                                     <td>{customer.login.uuid.substr(customer.login.uuid.length-5)}</td>
//                                                     <td><img src={customer.picture.large} width="50" height="50" alt="" /></td>
//                                                     <td>{customer.name.first} {customer.name.last}</td>
//                                                     <td>{customer.dob.age}</td>
//                                                     <td>{customer.email}</td>
//                                                     <td>{customer.location.city}</td>
//                                                 </tr>
//                                             )
//                                         })
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//         )
//     }

// }
// export default Customers;


//...................//..........................//..................

// import react from 'react';
// import { CustomerStore, ICustomer } from './CustomerStore';

// interface IProps{} 

// interface IState{
//     Raja:ICustomer[]
// }

// class Customers extends react.Component<IProps,IState>
// {
//     constructor(props:IProps)
//     {
//         super(props);
//         this.state={
//             Raja:CustomerStore.customerData
//         }
//     }

//     render()
//     {
//         return(
//             <react.Fragment>
//                  <div className="container mt-5">
//                      <div className="row">
//                          <div className="col">
//                              <h1 className="text-center text-info">
//                                 employee details
//                              </h1>
//                             <table className="table table-hover table-primary">
//                                 <thead className="bg-info">
//                                      <tr>
//                                         <th>Image</th>
//                                         <th>Name</th>
//                                         <th>Age</th>
//                                         <th>gender</th>
//                                         <th>Email</th>
//                                         <th>login</th>
//                                         <th>Location</th>
                                        
//                                     </tr>
//                                 </thead>

//                                 <tbody className="">
//                                     {
//                                         this.state.Raja.map((Love)=>
//                                         {
//                                           return(
//                                              <tr>
//                                                <td>{<img src={Love.picture.large} width="50" height="50" alt="" />}</td>
//                                                <td>{Love.name.first} {Love.name.last}</td>
//                                               <td>{Love.dob.age}</td>
//                                               <td>{Love.gender}</td>
//                                               <td>{Love.email}</td>
//                                               <td>{Love.login.uuid}</td>
//                                               <td>{Love.location.country}</td>
//                                              </tr>
//                                           )
//                                         })
//                                     }
//                                 </tbody>
//                             </table>
//                          </div>

//                      </div>
//                  </div>
               
//              </react.Fragment>

//         )
//     }
// }
 
// export default Customers;



//...................//............................//.............................//...........




import react from 'react';
import { CustomerStore, ICustomer } from './CustomerStore';

interface IProps{} 

interface IState{
   Rajasekhar:ICustomer[]
}

class Customers extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
         this.state={
             Rajasekhar:CustomerStore.customerData
         }
       
    }

    render()
    {
        return(
            <react.Fragment>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                 <h2 className="text-center">
                                     MY DETAILS
                                 </h2>
                                 
                                 <table className="table table-hover">
                                     <thead className="text-center bg-info">
                                          <tr>
                                              <th>IMAGE</th>
                                              <th>NAME</th>
                                              <th>SEX</th>
                                              <th>AGE</th>
                                              <th>ADDRESS</th>
                                          </tr>
                                     </thead>

                                     <tbody className="text-center bg-warning">
                                         {
                                             this.state.Rajasekhar.map((Failure)=>
                                             {
                                                 return(
                                                    <tr>
                                                        <td>{<img src={Failure.picture.large} width='50' height='50'></img>}</td>
                                                        <td>{Failure.name.first} {Failure.name.last}</td>
                                                        <td>{Failure.gender}</td>
                                                        <td>{Failure.dob.age}</td>
                                                        <td>{Failure.location.country}</td>
                                                    </tr>
                                                 )
                                             })
                                         }

                                     </tbody>
                                 </table>
                            </div>
                        </div>
                    </div>
               
             </react.Fragment>

        )
    }
}
 
export default Customers;

