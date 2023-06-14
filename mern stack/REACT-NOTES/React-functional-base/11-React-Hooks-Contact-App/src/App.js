import React from 'react';
import'./App.css';
import ContactDetails from './components/CardsDetails';


function App() {

  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks -contact app</a>
      </nav>

      <ContactDetails/>

    </React.Fragment>
  );
}

export default App;
