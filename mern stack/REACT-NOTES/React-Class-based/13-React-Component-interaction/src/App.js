// import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ClientCard from './advanced/ClientCard';
import ServerCard from './advanced/ServerCard';
import './App.css';
import ParentCards from './intermediate/Intermediates/ParentCards';
import ParentCard from './intermediate/ParentCard';
import Parent from './simple/Parent';

class App extends React.Component{
   constructor(props){
      super(props);

      this.state={
         total:0,
      }
   }

   receive=(value)=>
   {
      this.setState({
         ...this.state,
         total:value,
         
      });
   }

   render(){
      return(
         <React.Fragment>
           <nav className="navbar navbar-warning bg-warning navbar-expand-sm">
            <a href="/"className='navbar-brand'>Component - Interaction</a>
        </nav> 

     <Parent/>
     <ParentCard/>
     <ParentCards/>

     {/* ................advanced ..................*/}

     <section className="p-3">
      <div className="container">
         <div className="row">
            <div className="col-md-4">
         {/* <pre>{this.state.total}</pre> */}
               <ClientCard sendData={this.receive}/>

            </div>

            <div className="col-md-4">
          
               <ServerCard raja={this.state.total}/>

            </div>
         </div>
      </div>
     </section>

        
     </React.Fragment>
      )
   }
}

export default App;
