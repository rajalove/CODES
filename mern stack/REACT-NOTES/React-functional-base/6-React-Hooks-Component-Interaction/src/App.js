import './App.css';
import React from 'react';
import'./App.css';
import Parents from './Components/simple/Parents';
import Father from './Components/simple/childTOparent.js/Father';
import Parent from './Components/intermediate/Parent';
import MainCard from './Components/advanced/MainCard';



function App() {
  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks-component interaction</a>
      </nav>

   {/* ..............simple............... */}
   <Parents/>
    <Father/>
   
   {/* ...............intermediate............ */}
   <Parent/>
   
    <MainCard/>

    </React.Fragment>
  );
}

export default App;
