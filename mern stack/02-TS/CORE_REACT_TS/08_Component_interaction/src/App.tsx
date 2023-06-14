import React from 'react';
import './App.css';
import ParentCard from './Component/Intermediate/ParentCard';

let App=() =>
{
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="xyz" className="navbar-brand">React-Component-Interaction</a>
      </nav>
      {/* <ParentComponent/> */}
      <ParentCard/>
    </React.Fragment>
    
  );
}

export default App;