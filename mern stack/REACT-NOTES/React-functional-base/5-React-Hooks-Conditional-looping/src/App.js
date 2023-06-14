import './App.css';
import React from 'react';
import'./App.css';
import Login from './components/Login';
import HobbySelector from './components/HobbySelector';
import HobbyRadio from './components/HobbyRadio';
import Employees from './components/Employees';
import Customers from './components/Customers';


function App() {
  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks-Conditional Looping</a>
      </nav>

      <Login/>
      <HobbySelector/>
      <HobbyRadio/>
      <Employees/>
      <Customers/>

    </React.Fragment>
  );
}

export default App;
