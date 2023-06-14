import './App.css';
import React, { useState } from 'react';
import'./App.css';
import DigitalWatch from './components/DigitalWatch';



function App() {

  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks - Life Cycle method</a>
      </nav>
<DigitalWatch/>

    </React.Fragment>
  );
}

export default App;
