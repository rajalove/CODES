import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import'./App.css';
import EmployeeDetails from './components/employees/EmployeeDetails';
import EmployeeList from './components/employees/EmployeeList';
import Opening from './components/mainpage/Opening';
import About from './components/root/layout/about/About';
import Home from './components/root/layout/home/Home';
import Navabar from './components/root/layout/navbar/Navabar';
import StockDetails from './components/stocks/StockDetails';
import StockList from './components/stocks/StockList';


function App() {

  return (

    <React.Fragment>

  <Router>
    <Navabar/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/employees' element={<EmployeeList/>} /> 
      <Route path='/employees/:id' element={<EmployeeDetails/>} />
      <Route path='/stocks' element={<StockList/>} />
      <Route path='/stocks/:stockID' element={<StockDetails/>} />
      {/* <Route path='/Mainpage' element={<Opening/>} /> */}
      
     

    </Routes>
  </Router>

<Opening/>
    </React.Fragment>
  );
}

export default App;
