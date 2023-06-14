import React from 'react';

class SubmitForm extends React.Component{
     constructor(props){
        super(props);

        this.state={
            Details:{
                username:'',
                email:'',
                password:'',
                terms:false,
               
            }
        }

     }

     UpdateDetails=(event)=>
     {
        this.setState({
            Details:{
                ...this.state.Details,
                username:event.target.value,
            }
        });
     }


     UpdateD=(event)=>
     {
        this.setState({
            Details:{
                ...this.state.Details,
                email:event.target.value,
            }
        });
     }



     Updated=(event)=>
     {
        this.setState({
            Details:{
                ...this.state.Details,
                password:event.target.value,
            }
        });
     }

     Updates=(event)=>
     {
        this.setState({
            Details:{
                ...this.state.Details,
                terms:event.target.checked,
            }
        });
     }

     UpdateSubmit=(event)=>
     {
        event.preventDefault();
        console.log(this.state.Details)
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
                                    <p className="h3">registration here</p>
                                    </div>

                                    <div className="card-body bg-light">
                                    <form onSubmit={this.UpdateSubmit}>
                                        <div className="form-group mt-2">
                                            <input type="text" placeholder='Name' className='form-control' value={this.state.Details.username} onChange={this.UpdateDetails}/>
                                        </div>

                                        <div className="form-group mt-2">
                                            <input type="email" placeholder='Email' className='form-control' value={this.state.Details.email} onChange={this.UpdateD}/>
                                        </div>

                                        <div className="form-group mt-2">
                                            <input type="password" placeholder='password' className='form-control' value={this.state.Details.password} onChange={this.Updated}/>
                                        </div>

                                        <div className="form-group mt-2">
                                           <div className="form-check">
                                           <input type="checkbox" className='form-check-input' value={this.state.Details.terms} onChange={this.Updates} />
                                           <label className='form-check-label'>accept the terms & conditions</label>
                                           </div>
                                        </div>

                                        <div className="button text-center">
                                            <input type="submit" className='btn btn-primary btn-sm'/>
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

export default SubmitForm;