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
            <nav className="navbar navbar-dark bg-success navbar-expand-sm">
                <div className="container">
                    <NavLink to='/' className="navbar-brand">
                        <i className="fa fa-shopping-cart"></i> Green Basket
                    </NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/products/list" className="nav-link">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products/admin" className="nav-link">Admin</NavLink>
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