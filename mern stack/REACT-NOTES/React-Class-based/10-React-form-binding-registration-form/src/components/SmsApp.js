import React from 'react';

class SmsApp extends React.Component{
     constructor(props){
        super(props);

        this.state={
            message:{
                sms:'',
                MinCount:0,
                MaxCount:0,
            }
        }

     }

     raja=(event)=>
     {
        this.setState({
            message:{
                ...this.state.message,
             sms:this.state.message.MinCount+event.target.value.length,

            }
            
        });

     }
     
     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-header">
                                        <p className="h3">Sms App</p>
                                    </div>

                                    <div className="card-body">
                                        <textarea name=""Maxlength={100} id=""placeholder='enter some text here' rows="3"className='form-control' onChange={this.raja}></textarea>
                                    </div>
 
                                    <div className="card-footer text-white">
                                        <p className="h4">Sms application: {this.state.message.sms}/100</p>
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

export default SmsApp;