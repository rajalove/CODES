import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
import AuthUser from './components/AuthUser';
import Customers from './components/Customers';
import EmployeeCard from './components/EmployeeCard';
import HobieeSelector from './components/HobieeSelector';

function App() {

  return (
                          
    <React.Fragment>

    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="abc" className="navbar-brand">React looping</a>
    </nav>



<AuthUser/>
<HobieeSelector/>
<Customers/>
<EmployeeCard/>


  </React.Fragment>

  );
}

export default App;