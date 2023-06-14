import React, { useState } from "react";

let Employees=()=>
{
    let [users]=useState([
       
        {

            id:'AAb1',
            name:'raja',
            age:25,
            designation:'software Engineer',
            location:'hydrabad',
        },
        {

            id:'AAb2',
            name:'jayakumar',
            age:18,
            designation:'student',
            location:'kadapa',
        },
        {

            id:'AAb3',
            name:'naresh',
            age:31,
            designation:'electrician',
            location:'kuwait city',
        },
        {

            id:'AAb4',
            name:'murali',
            age:33,
            designation:'Engineer',
            location:'hydrabad',
        },
        {

            id:'AAb5',
            name:'suresh',
            age:31,
            designation:'SAP',
            location:'banglore',
        },
    ]);


    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            {
                                users.map((lover,index)=>
                                {
                                    return(
                                      <div className="col-md-4 mt-4">
                                          <div className="card">
                                            <div className="card-header bg-success">
                                                <p className="h3">employee details</p>
                                            </div>

                                            <div className="card-body rgba-yellow-light">
                                                <ul className="list-unstyled">
                                                    <li className="py-2"><span className="text-primary">S.No</span>: {index+1}</li>
                                                    <li className=""><span className="text-secondary">id:</span> {lover.id}</li>
                                                    <li className=""><span className="text-info">name:</span> {lover.name}</li>
                                                    <li className=""><span className="text-warning">age:</span> {lover.age}yrs</li>
                                                    <li className=""><span className="text-danger">designation:</span> {lover.designation}</li>
                                                    <li className=""><span className="text-primary">location:</span> {lover.location}</li>
                                                </ul>
                                            </div>
                                            </div>
                                        
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
        </React.Fragment>
    );
};

export default Employees;