import React from 'react';
import { NewCustomerList } from './NewCustomerList';



class NewCustomer extends React.Component{
     constructor(props){
        super(props);

        this.state={
            customers:NewCustomerList,
        }

     }

     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Custmer list</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus molestias a debitis, voluptas tempora. Totam in illum animi natus,
                                 facere vero laboriosam distinctio sequi quam laborum sed et odit obcaecati nostrum officiis,
                                  similique quaerat. Culpa ullam dolorem vero! Dignissimos.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                              <table className="table table-hover text-center">
                                   <thead className="bg-dark text-white">
                                   <tr>
                                        <th className='bg-danger'>S.NO</th>
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>AGE</th>
                                        <th>GENDER</th>
                                        <th>LOCATION</th>
                                    </tr>
                                   </thead>

                                   <tbody className="table-primary">
                                      
                                      {
                                      
                                    this.state.customers.map((people)=>{
                                        return(
                                            <tr>
                                                <td className='bg-dark text-white'>{people.login.uuid.substring(people.login.uuid.length-5)}</td>
                                                <td><img src={people.picture.large}alt="" height='50px' width='50px' /></td>
                                                <td>{people.name.first} {people.name.last}</td>
                                                <td>{people.dob.age} yrs</td>
                                                <td>{people.gender.toUpperCase()}</td>
                                                <td>{people.location.country}</td>
                                            </tr>
                                        )
                                    })
                                       
                                      }

                                   </tbody>
                              </table>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default NewCustomer;