import './App.css';
import React from 'react';
import'./App.css';
import CounterClass from './components/CounterClass';
import CounterFunctional from './components/CounterFunctional';
import WishMessage from './components/WishMessage';
import Productitem from './components/ProductItem';
function App() {
  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks-Event Binding</a>
      </nav>

       <CounterClass/>
       <CounterFunctional/>
       <WishMessage/>
       <Productitem/>

    </React.Fragment>
  );
}

export default App;
