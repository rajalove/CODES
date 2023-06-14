import React from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Home from './Components/layout/Home';
import About from './Components/layout/About';
import Products from './Components/layout/Products';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
            <Routes>
              <Route path="/home"element={Home}/>
              <Route path="/*about"element={About}/>
              <Route path="/*Products"element={Products}/>
          
       </Routes>
       </BrowserRouter>


        </React.Fragment>
      )
    }
}

export default App;