import React from 'react';
import './App.css';
import CartItem from './components/Cart/CartItem';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import WishMessage from './components/WishMessage';
import WishMessage2 from './components/WishMessage2';



function App(){

  return (

     <React.Fragment>
          <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>Event-binding</a>
        </nav>
        
  <CartItem/>
   <Counter/>
   <Counter2/>
   <WishMessage/> 
   <WishMessage2/>
  
        
     </React.Fragment>
  );
}

export default App;
