import React from 'react';


class WishMessage2 extends React.Component{
     constructor(props){
        super(props);

        this.state={
            message:'Hallo anu',
        }

     }

     morning=()=>
     {
        this.setState({

            message:'good morning',
           
        })
     }

     afternoon=(a)=>
     {
        this.setState({
            message:a,
        })
     }


     render(){

        return(
            <React.Fragment>
                <section className="p-3 bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-header text-white">
                                        <h1>wish Message</h1>
                                    </div>

                                    <div className="card-body bg-light">
                                        <div className="buttons text-center text-warning">
                                            <h2>{this.state.message}</h2>
                                            <button className="btn btn-primary btn-md" onClick={this.morning}>morning</button>
                                            <button className="btn btn-primary btn-md" onClick={this.afternoon.bind(this,'good afternoon',)}>afternoon</button>
                                            <button className="btn btn-primary btn-md" onClick={()=>{this.setState({message:'good evening',})}}>evening</button>
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

export default WishMessage2;