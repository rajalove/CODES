import React from 'react';
// import {Router, Routes , Route } from 'react-router-dom';
// import {createRoot} from 'react-dom/client';
// import EmployeeDetails from './components/employees/components/EmployeeDetails';
// import EmployeeList from './components/employees/components/EmployeeList';
// import Home from './components/root/layout/components/home/Home';
// import StockDetails from './components/stocks/components/StockDetails';
// import StockList from './components/stocks/components/StockList';

// import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EmployeeDetails from './components/employees/EmployeeDetails';
// import EmployeeDetails from './components/employees/EmployeeDetails';
import EmployeeList from './components/employees/EmployeeList';
import About from './components/root/layout/about/About';
import Home from './components/root/layout/home/Home';
import Navabar from './components/root/layout/navbar/Navabar';
// import StockDetails from './components/stocks/StockDetails';
import StockList from './components/stocks/StockList';

class App extends React.Component{
     constructor(props){
        super(props);

       }

   

     render(){

        return(
            <React.Fragment>

                {/* <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
<a href="/"className='navbar-brand'>React Github Profile Search</a>
</nav>  */}
         
  

       
          <Router>
          <Navabar/>
         <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route  path='/employees' element={<EmployeeList/>}/>
                    <Route  path='/employees/:employee_Id' element={<EmployeeDetails/>}/>
                    <Route  path='/stocks' element={<StockList/>}/>
                    <Route  path='/About' element={<About/>}/>
                    
                    
                    
               </Routes>
            </Router>
        

      
       </React.Fragment>
        );

     }
}

export default App;