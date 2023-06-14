import React from 'react';
import ContactList from './ContactList';

class ContactApp extends React.Component{
     constructor(props){
        super(props);

        this.state={
            data:{},
        }
     }

     reciver=(details)=>
     {
        this.setState({
            ...this.state,
            data:details,
        });
     }

     render(){

        return(
            <React.Fragment>
             <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList sendData={this.reciver}/>
                        </div>

                        <div className="col-md-3">
                            <pre>{JSON.stringify(this.state.data)}</pre>

                            <div className="card">
                                <div className="card-header bg-dark py-4">
                                    <h6 className=" text-white">details</h6>
                                </div>

                                <div className="card-body">
                                  {
                                    Object.keys(this.state.data).length > 0?
                                    <React.Fragment>

                                   <div className="detail text-center">
                                   <p><img src={this.state.data.picture.large} alt="" className='rounded-circle img-thumbnail'/></p>
                                    <p>Name: {this.state.data.name.first}</p>
                                    <p>Age: {this.state.data.dob.age}</p>
                                    <p>Place: {this.state.data.location.city}</p>
                                    </div>

                                    </React.Fragment>:null
                                  }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
             </section>
    
            </React.Fragment>
        );

     }
}

export default ContactApp;