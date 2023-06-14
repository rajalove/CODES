import React from 'react';
import {NavLink} from 'react-router-dom';


interface IProps{}


interface IState{}

class Navbar extends React.Component<IProps,IState>
{
    
    render()
    {
        return(
            <React.Fragment>
           
           <nav className="navbar navbar-dark bg-info navbar-expand-sm">
                <div className="container">
                    <NavLink to="/" className='navbar-brand mr-5'>
                        <i className='fa fa-snowflake'></i>Self Cart</NavLink>


                    <div className='collapse navbar-collapse flex-row justify-content-center'>
                        <ul className='navbar-nav'>
                            <li className='nav-item '>
                                <NavLink to="/layout/home" className='nav-link'>
                                    <i className='fa fa-home'></i>home</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/layout/products" className='nav-link'>
                                <i className="fa fa-shopping-cart"></i>product</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/layout/about" className='nav-link'>
                                <i className="fa fa-running"></i>About</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to="/users/register" className='nav-link'>
                                    <i className='fa fa-user-plus'></i> Register</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/users/login" className='nav-link'>
                                    <i className='fa fa-sign-in-alt'></i> LogIn</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                
             </React.Fragment>

        )
    }
}

export default Navbar;
