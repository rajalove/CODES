import React from 'react';
import './App.css';
import NewSmsapp from './components/NewSmsapp';
import Registration from './components/Register/Registration';
import SmsApp from './components/SmsApp';
import SubmitForm from './components/SubmitForm';

function App(){

  return (

     <React.Fragment>
           <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>looping</a>
        </nav> 

<SmsApp/>
<NewSmsapp/>
<Registration/>
<SubmitForm/>

     </React.Fragment>
  );
}

export default App;
