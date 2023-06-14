import React from 'react';
import './App.css';
import AuthCard from './components/AuthCard';
import AuthUserButtonVisible from './components/AuthUserButtonVisible';
import HobbyRadio from './components/HobbyRadio';
import HobbySelector from './components/HobbySelector';


function App(){

  return (

     <React.Fragment>
           <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>conditional-looping</a>
        </nav> 

        <AuthCard/>
        <AuthUserButtonVisible/>
        <HobbySelector/>
        <HobbyRadio/>
        
     </React.Fragment>

  );
}

export default App;
