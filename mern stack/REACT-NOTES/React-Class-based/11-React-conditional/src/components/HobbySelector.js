import React from 'react';

class HobbySelector extends React.Component{
     constructor(props){
        super(props);

        this.state={
            hobby:{
                eating:false,
                coding:false,
                sleeping:false,
            }
        }
     }

     HobbyCheck=(event)=>
     {
        this.setState({
            hobby:{
                ...this.state.hobby,
            [event.target.name]:event.target.checked,
            }
        });
     }
    

     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-primary">
                                        <p className="h3 text-white">hobby selector</p>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 mt-2">
                                                <div className="form-check">
                                                    <input type="checkbox" className='form-check-input' name='eating' onChange={this.HobbyCheck}/>
                                                    <label className='form-check-label'>Eating</label>
                                                </div>

                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className='form-check-input' name='coding' onChange={this.HobbyCheck}/>
                                                    <label className='form-check-label'>Coding</label>
                                                </div>

                                                <div className="form-check mt-2">
                                                    <input type="checkbox" className='form-check-input' name='sleeping' onChange={this.HobbyCheck} />
                                                    <label className='form-check-label'>Sleeping</label>
                                                </div>
                                            </div>
                                            

                                            <div className="col-md-9">
                                               {
                                                this.state.hobby.eating && 
                                                <div className="card mt-2">
                                                <div className="card-body bg-success">
                                                    <p className="h3 text-white"><i className="fa fa-check-circle"></i> Eating</p>
                                                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quis?</small>
                                                </div>
                                            </div>
                                               }

                                                {
                                                    this.state.hobby.coding &&
                                                    <div className="card mt-2">
                                                    <div className="card-body bg-warning">
                                                        <p className="h3 text-white"><i className="fa fa-check-circle"></i> Coding</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque.</small>
                                                    </div>
                                                </div>
                                                }

                                                {
                                                    this.state.hobby.sleeping &&
                                                    <div className="card mt-2">
                                                    <div className="card-body bg-secondary">
                                                        <p className="h3 text-white"><i className="fa fa-check-circle"></i> Sleeping</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, expedita.</small>
                                                    </div>
                                                </div>
                                            
                                                }
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

export default HobbySelector;