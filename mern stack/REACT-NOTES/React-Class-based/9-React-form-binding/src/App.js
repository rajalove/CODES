import React from 'react';
import './App.css';
import ChangePassword from './components/ChangePassword';
import ChangeUsername from './components/ChangeUsername';
import FormdataToState from './components/FormdataToState';
import SelectBox from './components/SelectBox';
import Formdata1function from './Formdata1function';


function App(){

  return (

     <React.Fragment>
          <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>form-binding</a>
        </nav>
        
 <ChangeUsername/>
  <FormdataToState/>
  <Formdata1function/>
  <SelectBox/>
  <ChangePassword/>
        
     </React.Fragment>
  );
}

export default App;
