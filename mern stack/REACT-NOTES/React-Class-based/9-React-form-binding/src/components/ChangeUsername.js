import React from 'react';

class ChangeUsername extends React.Component{
     constructor(props){
        super(props);

        this.state={
            username:''
        }

     }

     UpdateInput=(event)=>
     {
        this.setState({
            username:event.target.value,
        });
     }


     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header text-white">
                                        <p className="h4">Change username</p>
                                    </div>

                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" placeholder='enter text here' className='form-control'value={this.state.username} onChange={this.UpdateInput}/>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="card-footer bg-light text-white">
                                        <p className="h4">{this.state.username}</p>
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

export default ChangeUsername;