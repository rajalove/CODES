import React from 'react';

class Practice extends React.Component{
    constructor(props){
        super(props);

        this.state={
            message:'Hallo hi'
        }
    }

    Morning=()=>
    {
        this.setState({
            message:'good morning',
        });
    }

    afternoon=(value)=>
    {
        this.setState({
            message:value,
        });
    }


     render(){

        return(
            <React.Fragment>
                
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 m-auto">
                               <div className="card">
                                <div className="card-header text-white">
                                    <h2>wish message</h2>
                                </div>

                                <div className="card-body">
                                    <div className="button">
                                        <h2 className='text-center'>{this.state.message}</h2>
                                       <button className="btn btn-hover" onClick={this.Morning}>morning</button>
                                       <button className="btn btn-hover"onClick={this.afternoon.bind(this,'good afternoon')}>afternoon</button>
                                       <button className="btn btn-hover"onClick={()=>{this.setState({message:'good evening'})}}>evening</button>
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

export default Practice;