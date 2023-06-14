import React from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
class ContactApp extends React.Component{

     constructor(props){
        super(props);

            this.state={
                Killer:{},
            }
     }

    Receiver=(lover)=>
    {
       this.setState({
        Killer:lover,
       })
    }

     render(){
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state.Killer)}</pre>
               <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                       
                                <ContactList sendering={this.Receiver}/>

                        </div>

                        <div className="col-md-4">
                            <ContactCard sendData={this.state.Killer}/>
                        </div>
                    </div>
                </div>
               </section>
            </React.Fragment>
        );

     }
}

export default ContactApp;