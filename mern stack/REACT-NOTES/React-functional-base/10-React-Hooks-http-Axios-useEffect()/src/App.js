import React from 'react';
import'./App.css';
import UserList from './components/UserList';

function App() {

  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks - http axios with useEffect()</a>
      </nav>

        <UserList/>
    </React.Fragment>
  );
}

export default App;
