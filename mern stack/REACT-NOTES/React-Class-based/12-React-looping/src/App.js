import React from 'react';
import './App.css';
import Customers from './components/Customers';
import Employees from './components/Employees';
import NewCustomer from './components/NewCustomer/NewCustomer';

function App(){

  return (

     <React.Fragment>
           <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>conditional-looping</a>
        </nav> 

      <Employees/>
      <Customers/>
      <NewCustomer/>
        
     </React.Fragment>

  );
}

export default App;
