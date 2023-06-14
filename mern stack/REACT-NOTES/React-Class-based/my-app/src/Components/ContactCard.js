import React from 'react';

class ContactCard extends React.Component{
   //   constructor(props){
   //      super(props);

   //   }

     render(){
    
        return(
          
        
                 <React.Fragment>
                       {
                        Object.keys(this.props.Prasad).length> 0?

                        <React.Fragment>
                                    <p className="h4">{this.props.Prasad.name}</p>
                                    <p className="h4">{this.props.Prasad.username}</p>
                                    <p className="h4">{this.props.Prasad.email}</p>
                                    <p className="h4">{this.props.Prasad.phone}</p>
                                    
                        </React.Fragment>:null
                       }
            </React.Fragment>
        );

     }
}

export default ContactCard;