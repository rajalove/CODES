import React from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Home from './Components/layout/Home';
import About from './Components/layout/About';
import Product from './Components/layout/Products';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Products from './Components/layout/Products';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
interface IProps{}
interface IState{}


class App extends React.Component<IProps,IState>
{
   
    render()
    {
      return(
        <React.Fragment>
          <BrowserRouter>
          <Navbar/>
            <Switch>
              <Route path="/Home"exact component={Home}/>
              <Route path="/*about"exact component={About}/>
              <Route path="/*Products"exact component={Products}/>
          
       </Switch>
       </BrowserRouter>
        </React.Fragment>
      )
    }
}

export default App;