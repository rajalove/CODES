import React from 'react';
import Child from './Child';

class Parent extends React.Component{
     constructor(props){
        super(props);

        this.state={
            Text:'hello, i am from Parent',
            kid:'',
        }
     }

     receiveData=(value)=>
     {
        this.setState({
            ...this.state,
            kid:value,
        });
     }

     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body rgba-purple-light">
                                        <p className="h4">parent</p>
                                        <small className='text-danger'>{this.state.kid}</small>
                                               
                                        <Child pText={this.state.Text} sendData={this.receiveData}/>

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

export default Parent;