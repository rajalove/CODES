import './App.css';
import React from 'react';
import'./App.css';
import ChangeUsername from './components/ChangeUsername';
import SelectBox from './components/SelectBox';
import SmsApp from './components/SmsApp';
import ChangePassword from './components/ChangePassword';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks-Form Binding</a>
      </nav>

       <ChangeUsername/>
       <SelectBox/>
       <SmsApp/>
       <ChangePassword/>
       <RegistrationForm/>

    </React.Fragment>
  );
}

export default App;
