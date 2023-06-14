import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
import Message from './Components/Message';
import Tuch from './Components/Tuch';
import InputUser from './Components/InputUser';
import Register from './Components/Register';



function App() {

  return (
                          
    <React.Fragment>

    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="abc" className="navbar-brand">React practice</a>
    </nav>



<Tuch/>
<Message/>
<InputUser/>
<Register/>

  </React.Fragment>

  );
}

export default App;