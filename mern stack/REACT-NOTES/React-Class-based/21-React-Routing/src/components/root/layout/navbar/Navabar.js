import React from 'react';
import { NavLink } from 'react-router-dom';




class Navabar extends React.Component{
   //   constructor(props){
   //      super(props);

   //   }

     render(){

        return(
            <React.Fragment>
               <nav className="navbar navbar-dark bg-info navbar-expand-sm">
                <div className="container">
                    <NavLink to="/" className='navbar-brand'>
                        <i className='fa fa-snowflake'></i>&nbsp;&nbsp;React Routing</NavLink>


                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to="/home" className='nav-link'>
                                    home</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to="/employees" className='nav-link'>
                                    employee</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to="/stocks" className='nav-link'>
                                    stock</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to="/About" className='nav-link'>
                                    about</NavLink>
                            </li>

                           
                        </ul>
                    </div>

                </div>
            </nav>
            </React.Fragment>
        );

     }
}

export default Navabar;