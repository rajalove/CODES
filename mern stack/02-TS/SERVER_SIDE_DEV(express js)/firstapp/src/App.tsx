import React from "react";
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import NavBar from "./Component/Layout/NavBar";
import Home from "./Component/Layout/Home";
import ProductList from './Component/Layout/ProductList';
import ProductAdmin from './Component/Layout/ProductAdmin';
import CreateProduct from './Component/Layout/CreateProduct';
import UpdateProduct from './Component/Layout/UpdateProduct';


interface IProps
{
    
}
interface IState
{
  
}
class App extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
    }
   render()
    {
        return(
        <React.Fragment>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/products/list' component={ProductList}/>
                    <Route exact path='/products/admin' component={ProductAdmin}/>
                    <Route exact path='/products/create' component={CreateProduct}/>
                    <Route exact path='/product/:productId' component={UpdateProduct}/>
                </Switch>
            </Router>
        </React.Fragment>
        )
    }

}
export default App;