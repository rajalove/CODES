import React from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

class ContactApp extends React.Component{
     constructor(props){
        super(props);

        this.state={
          details:{},
        }

     }
     receiver=(data)=>
     {
        this.setState({
            ...this.state,
            details:data,
           
        });

     }

     render(){

        return(
            <React.Fragment>
             
              <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3>card list</h3>
                            <ContactList sendData={this.receiver}/>
                        </div>


                        <div className="col-md-3">
                        
                            <h3>card details</h3>
                            <pre>{JSON.stringify(this.state.details)}</pre>
                            <ContactCard mydata={this.state.details}/>
                        </div>
                    </div>
                </div>
              </section>
               
            </React.Fragment>
        );

     }
}

export default ContactApp;