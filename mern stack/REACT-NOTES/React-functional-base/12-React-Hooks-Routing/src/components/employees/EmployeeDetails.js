import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

let EmployeeDetails=()=>
{

    let employeeId =useParams().id;
    let [selectedEmployee,setselectedEmployee]=useState([]);
    let [ErrorM,setErrorM]=useState('');

    useEffect(()=>
    {
        let dataURL='https://gist.githubusercontent.com/rajalove/f38951caaf5b1b82a786272b2113fb73/raw/e10d846d66594cba6a7d3756fce51f7057bf85e5/ContactListHooks.json';
        axios.get(dataURL).then((response)=>
        {

            let totalEmployees = response.data;
            let Anitha= totalEmployees.find(Queen => Queen.login.uuid === employeeId);

            setselectedEmployee(Anitha);

        }).catch((error)=>
        {
            setErrorM(error);
        })

    },[])

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Employee Details</p>
                            <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti porro totam quisquam temporibus
                             neque ea modi corporis dolorum. Est nam delectus corporis numquam optio possimus officia unde! Sed, quia beatae!</p>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4 col-mx-6 m-auto">
                                <div className="card">
                                    <div className="card-header bg-dark text-white">
                                        <p className="h3">employee details</p>
                                        <Link to='/employees'className='btn btn-outline-white btn-sm text-dark text-center'>back</Link>
                                    </div>

                                    <div className="card-body">
                                        {/* <pre>{JSON.stringify(selectedEmployee)}</pre> */}

                                       {
                                           Object.keys(selectedEmployee).length>0?

                                           <React.Fragment>

                                             <div className="loves text-center">
                                             <img src={selectedEmployee.picture.large} alt="" className="rounded-circle"/>
                                             </div>
                                             <p className="h4">{selectedEmployee.name.first} {selectedEmployee.name.last}</p>
                                             <p className="">{selectedEmployee.cell}</p>
                                             <p className="">{selectedEmployee.dob.date}</p>
                                             <p className="">{selectedEmployee.location.country}</p>
                                          
                                           </React.Fragment>:null
                                       }
                                        
                                    </div>

                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </React.Fragment>
    );
};

export default EmployeeDetails;