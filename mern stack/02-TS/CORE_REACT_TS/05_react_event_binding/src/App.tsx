import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import 'font-awesome/css/font-awesome.css';
import Anitha from './Components/ChangeText';
import Love from './Components/ChangeTextBinding';
import Lovely from './Components/ChangeTextBinding2';
import Prema from './Components/AlltextBinding';
import Product from './Components/Product Item/ProductItem';


function App() {
  return (
    <React.Fragment>

    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <a href="abc" className="navbar-brand">React  event binding</a>
    </nav>


<Anitha/>
<Love/>
<Lovely/>
<Prema/>
<Product/>


  </React.Fragment>
  );
}

export default App;
