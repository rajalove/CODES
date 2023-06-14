import React from 'react';

class Child extends React.Component{
     constructor(props){
        super(props);

        this.state={
            kid:'hallo, i am from Child',
        }
     }

     clickSend=()=>
     {
        // here we send data child to parent

        this.props.sendData(this.state.kid);

     }

     render(){

        return(
            <React.Fragment>
                 <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body rgba-orange-light">
                                        <p className="h4">child</p>
                                        
                                        <small>{this.props.pText}</small>

                                        <br/>
                                               
                                         {/* <button onClick={this.clickSend} className='btn btn-success btn-sm'>send</button> */}

                                                 <small>{this.clickSend}</small>
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

export default Child;