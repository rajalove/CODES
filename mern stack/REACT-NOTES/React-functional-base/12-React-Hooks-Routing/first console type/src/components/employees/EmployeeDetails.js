import React from "react";
import { useParams } from "react-router-dom";

let EmployeeDetails=()=>
{

    let params =useParams();
    console.log(params)

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
                    </div>
                </div>
                </section>
        </React.Fragment>
    );
};

export default EmployeeDetails;