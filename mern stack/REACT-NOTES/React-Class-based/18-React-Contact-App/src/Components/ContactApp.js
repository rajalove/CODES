// import { prettyDOM } from '@testing-library/react';
import React from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

class ContactApp extends React.Component{
     constructor(props){
        super(props);
        
        this.state={

            contacts:{},
        }

     }

     receiveContact=(raja)=>
     {
        this.setState({
           contacts:raja,
        })
     }

     render(){
        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact App</p>
                                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore corporis vero praesentium quidem iusto,
                                 hic, quaerat necessitatibus voluptatibus voluptate soluta nulla rem aperiam. Eos, ipsam aut officiis debitis modi totam?</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <h1>contact list</h1>
                            <ContactList Killer={this.receiveContact}/>

                        </div>

                     
                        <div className="col-md-4">
                            <h1 className='text-center'>contact card</h1>
                        <ContactCard Sekhar={this.state.contacts}/>
                   
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

     }
}

export default ContactApp;