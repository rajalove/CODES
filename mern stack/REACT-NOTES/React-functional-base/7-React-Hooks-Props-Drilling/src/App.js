import './App.css';
import React, { useState } from 'react';
import'./App.css';
import ComponentA from './components/ComponentA';


function App() {

  let[User]=useState({
    
    name:'rajasekhar',
    age:26,
  });
  
  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks-props Drilling</a>
      </nav>

      {/* <ComponentA/> */}
      <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body rgba-grey-light">
                                    <p className="h3">App Component</p>
                                    <pre>{JSON.stringify(User)}</pre>

                                    <ComponentA ApptoA={User}/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </React.Fragment>
  );
}

export default App;
