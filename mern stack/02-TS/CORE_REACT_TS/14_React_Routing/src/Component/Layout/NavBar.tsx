import React from "react";
import {NavLink} from 'react-router-dom';

interface IProps
{

}
interface IState
{

}
class NavBar extends React.Component<IProps,IState>
{
    
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
    }
   render()
    {
        return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-info navbar-expand-sm">
                <div className="container">
                    <NavLink to="/" className='navbar-brand'>
                        <i className='fa fa-snowflake'></i>&nbsp;&nbsp;React Routing</NavLink>


                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink exact to="/employees/list" className='nav-link'>
                                    <i className='fa fa-users'></i> Employees</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to="/stocks/list" className='nav-link'>
                                    <i className='fa fa-chart-line'></i> Stocks</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to="/about" className='nav-link'>
                                    <i className='fa fa-envelope'></i> About</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink exact to="/users/register" className='nav-link'>
                                    <i className='fa fa-user-plus'></i> Register</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to="/users/login" className='nav-link'>
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
export default NavBar;