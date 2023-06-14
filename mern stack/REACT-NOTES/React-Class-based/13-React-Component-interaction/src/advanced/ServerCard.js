import React from 'react';

class ServerCard extends React.Component{
   //   constructor(props){
   //      super(props);

   //   }

     render(){

        return(
            <React.Fragment>
               
            <div className="card">
               <div className="card-header bg-success text-white">
                  <p className="h3">product details</p>
               </div>

               <div className="card-body">
                  <p className="h3">&#8377; {this.props.raja}</p>
               </div>
            </div>
            </React.Fragment>
        );

     }
}

export default ServerCard;