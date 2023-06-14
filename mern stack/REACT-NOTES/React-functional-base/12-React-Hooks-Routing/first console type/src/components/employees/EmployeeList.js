import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let EmployeeList=()=>
{
    let [Users,setUsers]=useState([]);
    let [ErrorMessage,setErrorMessage]=useState('');

   useEffect(()=>
   {
        AllEmployees();
   })

   let AllEmployees=()=>
   {
    let dataURL='https://gist.githubusercontent.com/rajalove/f38951caaf5b1b82a786272b2113fb73/raw/e10d846d66594cba6a7d3756fce51f7057bf85e5/ContactListHooks.json';
    axios.get(dataURL).then((response)=>
    {
        setUsers(response.data)
    }).catch((error)=>
    {
        setErrorMessage(error)
    })
    }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(Users)}</pre>
                <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Employee list</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem dicta sed aliquam accusamus
                             ea perferendis labore, cum eos, vitae, ipsam ratione provident porro. Iste debitis reiciendis quo minus corrupti.</p>
                        </div>
                    </div>
                </div>
                </section>

                <section className="p-3">
                   <div className="container">
                   <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>FULL NAME</th>
                                        <th>EMAIL</th>
                                        <th>GENDER</th>
                                        <th>COUNTRY</th>
                                    </tr>
                                </thead>
                                <tbody className="rgba-blue-light">
                                    {
                                        Users.map((Kingdom)=>
                                        {
                                            return(
                                                <tr key={Kingdom.login.uuid}>
                                                    <td>{Kingdom.login.uuid.substring(Kingdom.login.uuid.length-6)}</td>
                                                    <td>
                                                        <Link to={`/employees/${Kingdom.login.uuid}`} className='text-danger'>{Kingdom.name.first}{Kingdom.name.last}</Link>
                                                    </td>
                                                    <td>{Kingdom.email}</td>
                                                    <td>{Kingdom.gender}</td>
                                                    <td>{Kingdom.location.country}</td>
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
};

export default EmployeeList;