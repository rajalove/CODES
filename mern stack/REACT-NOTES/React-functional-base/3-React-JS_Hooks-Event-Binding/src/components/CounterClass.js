import React from "react";

class CounterClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            counter:0,
        }
    }

    Clicked=()=>
    {
        this.setState({
            counter:this.state.counter+1
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
                                        <div className="card-header text-center">
                                            <h1 className="display-4">{this.state.counter}</h1>
                                        </div>

                                        <div className="card-body text-center ">
                                            <button onClick={this.Clicked}
                                             className="btn btn-primary btn-sm">increment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        }



}
export default CounterClass;