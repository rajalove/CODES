import React from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App(){

  return (

     <React.Fragment>
          <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/"className='navbar-brand'>React-props</a>
        </nav>

        <ParentComponent/>
        
     </React.Fragment>
  );
}

export default App;
