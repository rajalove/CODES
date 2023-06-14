import React from 'react';

class Formdata1function extends React.Component{
     constructor(props){
        super(props);
        this.state={
            user:{
                username:'',
                email:'',
                password:'',
            }
        }

     }

     UserNames=(event)=>
     {
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]:event.target.value,
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
                        <p className="h3 text-success">here , we fill the form details and bind with state , when we bind with state, in that time only we send to server ,and here 
                        we are using one one function</p>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header text-white">
                                    <p className="h4">form binding</p>
                                    </div>

                                    <div className="card-body">
                                        <form onSubmit={this.SubmitLogin}>
                                            <div className="form-group">
                                                <input type="text" name='username' placeholder='username' className='form-control'value={this.state.user.username} onChange={this.UserNames}/>
                                            </div>

                                            <div className="form-group mt-2">
                                                <input type="email" name='email' placeholder='email' className='form-control'value={this.state.user.email} onChange={this.UserNames}/>
                                            </div>

                                            <div className="form-group mt-2">
                                                <input type="password"name='password' placeholder='password' className='form-control' value={this.state.user.password} onChange={this.UserNames}/>
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

export default Formdata1function;