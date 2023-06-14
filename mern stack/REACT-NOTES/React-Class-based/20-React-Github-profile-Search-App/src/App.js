import React from 'react';
import GithubProfileSearch from './components/GithubProfileSearch';




class App extends React.Component{
   //   constructor(props){
   //      super(props);

   //     }

     render(){

        return(
            <React.Fragment>

                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
<a href="/"className='navbar-brand'>React Github Profile Search</a>
</nav> 
         
         <GithubProfileSearch/>
     
       </React.Fragment>
        );

     }
}

export default App;