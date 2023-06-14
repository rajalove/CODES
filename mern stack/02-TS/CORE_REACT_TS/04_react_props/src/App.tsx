import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
import Component1 from './Components/Component1';

function App() {
  return (
    <React.Fragment>

    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="abc" className="navbar-brand">React basic file</a>
    </nav>


<Component1/>

  </React.Fragment>
  );
}

export default App;
