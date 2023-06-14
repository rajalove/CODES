import React from "react";
import { NavLink } from "react-router-dom";


let Navabar=()=>
{
    return(
        <React.Fragment>
                <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
       <div className="container">
       <NavLink to="/"className='navbar-brand text-danger'>React Hooks-Routing</NavLink>

       <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/home" className='nav-link'>home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/employees" className='nav-link' >employee</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/stocks" className='nav-link' >stock</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" className='nav-link' >about</NavLink>
                </li>

             
            </ul>
           </div>
       </div>

      </nav>

        </React.Fragment>
    );
};

export default Navabar;