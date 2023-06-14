import React from 'react';

class Registration extends React.Component{
     constructor(props){
        super(props);

        this.state={
            user:{
                username:'',
                email:'',
                password:'',
                designation:'',
                 terms:false,


            }
        }

    }

    UpdateInput=(event)=>
    {
       if(event.target.type==='checkbox')
       {
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name] : event.target.checked,
            }
        });
       }
       else{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name] : event.target.value,
            }
        });
       }
    }
   
    submitRegister=(event)=>
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
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <p className="h3">Registration</p>
                                    </div>

                                    <div className="card-body rgba-red-light">
                                      <form onSubmit={this.submitRegister}>
                                      <div className="form-group">
                                        <input type="text" placeholder='Name' className='form-control' name='username' value={this.state.user.username} onChange={this.UpdateInput}/>
                                       </div>

                                       <div className="form-group mt-2">
                                        <input type="email" placeholder='Email'className='form-control' name='email' value={this.state.user.email} onChange={this.UpdateInput}/>
                                       </div>

                                       <div className="form-group mt-2">
                                        <input type="password" placeholder='password'className='form-control' name='password' value={this.state.user.password} onChange={this.UpdateInput}/>
                                       </div>

                                       <div className="form-group mt-2">
                                       <select className='form-control'name='designation' value={this.state.user.designation} onChange={this.UpdateInput}>
                                        <option value="">select designation</option>
                                        <option value="software">software</option>
                                        <option value="techlead">techlead</option>
                                        <option value="webdesigner">wen designer</option>
                                        <option value="tester">tester</option>
                                        <option value="programmer">progtammer</option>
                                       </select>
                                       </div>

                                       <div className="form-group mt-2">
                                        <div className="form-check">
                                        <input type="checkbox" className='form-check-input'name='terms' value={this.state.user.terms} onChange={this.UpdateInput}/>
                                         <label className="form-check-label">accept term & conditions</label>
                                        </div>
                                       </div>

                                       <div className="button text-center">
                                         <input type="submit" className='btn btn-danger btn-sm' value='register'/>
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

export default Registration;