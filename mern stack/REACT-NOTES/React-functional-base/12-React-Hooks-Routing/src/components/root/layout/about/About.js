import React from "react";
import { Link } from "react-router-dom";

let About=()=>
{
    return(
        <React.Fragment>
          <section className="hearts text-center">
          <Link to='/home'className='btn btn-outline-white btn-sm text-white text-center'>back</Link>
         <p className="text-white">edit chese time ledhu..back nokki dobbey...<i className="fa fa-battery-quarter fa-2x" aria-hidden="true"></i>
         <br></br>
         
         </p>
          </section>
          

        </React.Fragment>
    );
};

export default About;