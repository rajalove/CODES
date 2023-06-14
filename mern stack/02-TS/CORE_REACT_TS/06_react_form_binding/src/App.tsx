import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
import UserInput from './Components/UserInput';
import SmsApp from './Components/SmsApp';
import CopySmsApp from './Components/copySmsApp';
import ShoppingCart from './Components/ShoppingCart';
import Registration from './Components/Register/Registration';
import Raja from './Components/Register/Raja';



function App() {
  return (
    <React.Fragment>

    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="abc" className="navbar-brand">React form binding</a>
    </nav>


<UserInput/>
<SmsApp/>
<CopySmsApp/>
<ShoppingCart/>
<Registration/>
<Raja/>


  </React.Fragment>
  );
}

export default App;
