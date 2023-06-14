import React from 'react';

class NewSmsapp extends React.Component{
     constructor(props){
        super(props);

        this.state={
            SmsMessage:{
              text:'',
              maxCount:100,
            }
        }

     }

     UpdatedText=(event)=>
     {
        this.setState({
          SmsMessage:{
            ...this.state.SmsMessage,
            text:event.target.value,
            
          }

        })
     }

     
     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-header">
                                        <p className="h3">Sms App</p>
                                    </div>

                                    <div className="card-body">
                                        <textarea name=""maxLength={this.state.SmsMessage.maxCount} value={this.state.SmsMessage.text} id=""placeholder='enter some text here' rows="3"className='form-control' onChange={this.UpdatedText}></textarea>
                                    </div>
 
                                    <div className="card-footer text-white">
                                        <p className="h4">Sms application: {this.state.SmsMessage.maxCount-this.state.SmsMessage.text.length}/100</p>
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

export default NewSmsapp;