import React from 'react';
import ChildCard from './ChildCard';

class ParentCard extends React.Component{
     constructor(props){
        super(props);

        this.state={
            pText:'',
        }

     }

     Father=(event)=>
     {
        this.setState({
            ...this.state,
            pText:event.target.value,
        });
     }


     render(){

        return(
            <React.Fragment>
                <par>{JSON.stringify(this.state)}</par>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-danger">
                                        <p className="h3 text-white">parent card</p>
                                    </div>

                                    <div className="card-body rgba-green-light">
                                        <form className="form">
                                            <div className="form-group">
                                                <input onChange={this.Father} type="text"  className='form-control'/>
                                            </div>
                                        </form>
                                          
                                          {/* <small>{this.state.pText}</small> */}


                                        <ChildCard Daddy={this.state.pText}/>
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

export default ParentCard;