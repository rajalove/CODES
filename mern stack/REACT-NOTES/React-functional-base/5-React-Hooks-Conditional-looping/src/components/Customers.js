import React, { useState } from "react";
import { CustomerList } from "./CustomerList";


let Customers=()=>
{
    let [AllCustomers]=useState(CustomerList)
    return(
        <React.Fragment>
            <pre>{JSON.stringify(AllCustomers)}</pre>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>AGE</th>
                                    <th>GENDER</th>
                                    <th>LOCATION</th>
                                </tr>
                            </thead>

                            <tbody className="rgba-blue-light table-striped">
                                {
                                    AllCustomers.map((raja)=>
                                    {
                                        return(
                                            <tr>
                                                <td>{raja.login.uuid.substring(raja.login.uuid.length-6)}</td>
                                                <td><img src={raja.picture.large} width={50} height={50} alt="" /></td>
                                                <td>{raja.name.first}{raja.name.last}</td>
                                                <td>{raja.dob.age}</td>
                                                <td>{raja.gender}</td>
                                                <td>{raja.location.country}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Customers;