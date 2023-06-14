import React from 'react';

class ChangePassword extends React.Component{
     constructor(props){
        super(props);

               this.state={

                    myPasswordType:'password',
                
               }
     }

     PasswordCheck=(event)=>
     {
        if(this.state.myPasswordType==='password')
        {
            this.setState({
                myPasswordType:'text',
            });
        }
        else{
            this.setState({
                myPasswordType:'password',
            });
        }
     }


     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                 <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-white">
                                    <h3>password check</h3>
                                </div>

                                <div className="card-body bg-light">
                                    <div className="input-group">
                                        <input type={this.state.myPasswordType} className='form-control'/>

                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <input type="checkbox"className='mr-2' onChange={this.PasswordCheck} />password
                                            </div>
                                        </div>
                                    </div>
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

export default ChangePassword;