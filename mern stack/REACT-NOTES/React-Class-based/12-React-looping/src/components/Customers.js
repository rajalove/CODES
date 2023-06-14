import React from 'react';
import { CustomerList } from './CustomerList';


class Customers extends React.Component{
     constructor(props){
        super(props);

        this.state={
            customer : CustomerList,
            
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
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam mollitia quis ipsa sapiente voluptatum,
                                 est eum totam dolores minus, sed architecto eius eos, aspernatur ab qui. Facere, esse magnam!</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                              <table className="table table-hover text-center table-striped table-primary">
                                   <thead className="bg-dark text-white">
                                   <tr>
                                        <th>S.NO</th>
                                        <th>NAME</th>
                                        <th>CITY</th>
                                        <th>EMAIL</th>
                                        <th>COMPANY</th>
                                    </tr>
                                   </thead>

                                   <tbody className="">
                                      
                                      {
                                      
                                    this.state.customer.map((person)=>{
                                        return(
                                            <tr>
                                                <td>{person.id}</td>
                                                <td>{person.name}</td>
                                                <td>{person.address.city}</td>
                                                <td>{person.email}</td>
                                                <td>{person.company.name}</td>
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

export default Customers;