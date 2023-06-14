import React from 'react';
import DigitalWatch from './components/DigitalWatch';

class App extends React.Component{
   //   constructor(props){
   //      super(props);

   //     }

     render(){

        return(
            <React.Fragment>
                <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
<a href="/"className='navbar-brand'>React life cycle method</a>
</nav> 


            <DigitalWatch/>
       </React.Fragment>
        );

     }
}

export default App;