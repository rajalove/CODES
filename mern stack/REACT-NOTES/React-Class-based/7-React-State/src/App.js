import React from 'react';
import './App.css';
import Navabar from './components/Navabar';


function App(){

  return (

     <React.Fragment>
          <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>React-State</a>
        </nav>

        <Navabar/>
        
     </React.Fragment>
  );
}

export default App;
