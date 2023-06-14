import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
import Same from './Components/Same';

function App() {
  return (
    <React.Fragment>

    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="abc" className="navbar-brand">React basic file</a>
    </nav>


<Same/>
  </React.Fragment>
  );
}

export default App;
