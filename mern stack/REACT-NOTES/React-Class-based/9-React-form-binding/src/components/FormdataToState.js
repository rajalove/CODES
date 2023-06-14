import React from 'react';

class FormdataToState extends React.Component{
     constructor(props){
        super(props);
        this.state={
            user:{
                username:'',
                password:'',
            }
        }

     }

     UserNames=(event)=>
     {
        this.setState({
            user:{
                ...this.state.user,
                username:event.target.value,
            }
        });
     }

     UserPassword=(event)=>
     {
        this.setState({
            user:{
                ...this.state.user,
                password:event.target.value,
            }
        });
     }

     SubmitLogin=(event)=>
     {
        event.preventDefault();
        console.log(this.state.user);
     }

    
     render(){
        return(
            <React.Fragment>
                      <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                        <p className="h3">here , we fill the form details and bind with state , when we bind with state, in that time only we send to server</p>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header text-white">
                                    <p className="h4">form binding</p>
                                    </div>

                                    <div className="card-body">
                                        <form onSubmit={this.SubmitLogin}>
                                            <div className="form-group">
                                                <input type="text" placeholder='username' className='form-control'value={this.state.user.username} onChange={this.UserNames}/>
                                            </div>

                                            <div className="form-group mt-2">
                                                <input type="password" placeholder='password' className='form-control' value={this.state.user.password} onChange={this.UserPassword}/>
                                            </div>

                                            <div className="button text-center">
                                                <input type="submit"className='btn btn-hover btn-md' />
                                            </div>
                                        </form>
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

export default FormdataToState;