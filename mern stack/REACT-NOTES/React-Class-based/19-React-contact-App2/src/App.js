import React from 'react';
import ContactApp from './Components/ContactApp';



class App extends React.Component{
   //   constructor(props){
   //      super(props);

   //     }

     render(){

        return(
            <React.Fragment>

                <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
<a href="/"className='navbar-brand'>React http with axios</a>
</nav> 
         
    <ContactApp/>
     
       </React.Fragment>
        );

     }
}

export default App;