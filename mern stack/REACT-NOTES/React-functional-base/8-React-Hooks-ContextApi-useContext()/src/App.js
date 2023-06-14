import './App.css';
import React, { useState } from 'react';
import'./App.css';
import ComponentA from './components/ComponentA';
import { UserContextApi } from './components/context/UserContextApi';
import { Appcontext } from './components/context/Appcontext';


function App() {

  let[User]=useState({
    
    name:'rajasekhar',
    age:26,
  });

  let[user2]=useState({
    
    name:'Naresh',
    age:32,
    status:'married',
  });


  
  return (

    <React.Fragment>

      <nav className="navbar navbar-dark  bg-dark text-white navbar-expand-sm">
        <a href="/"className='navbar-brand'>React Hooks-Context Api</a>
      </nav>

      <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body rgba-grey-light">
                                    <p className="h3">App Component</p>
                                    <pre className='text-danger'>{JSON.stringify(User)}</pre>
                                    <pre className='text-primary'>{JSON.stringify(user2)}</pre>

                                    

                                  <UserContextApi.Provider value={User}>
                                  <Appcontext.Provider value={user2}>
                                  <ComponentA/>
                                  </Appcontext.Provider>
                                  </UserContextApi.Provider>

                                    
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
