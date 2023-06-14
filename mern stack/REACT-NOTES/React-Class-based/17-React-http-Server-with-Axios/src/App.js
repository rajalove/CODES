import React from 'react';
import UserCard from './components/UserCard';
import UserList from './components/UserList';
import UserListAsync from './components/UserListAsync';
import UserListButton from './components/UserListButton';


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

            <UserListButton/>
            <UserCard/>
            <UserList/>
            <UserListAsync/>
      
       </React.Fragment>
        );

     }
}

export default App;