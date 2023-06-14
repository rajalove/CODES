
import React from 'react';

class Practice extends React.Component{
    constructor(props){
        super(props);

        this.state={
           raja:{
            message:'', 
            max:0,
            minmum:0,
           }
         }

    }
    messageChange=(event)=>
    {
        this.setState({
           raja:{
            ...this.state.raja,
            message:event.target.value,
            max:this.state.raja.minmum + event.target.value.length,
           }
            
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
                                <div className="card-header">
                                    <p className="h3 text-white">copy typing</p>
                                </div>

                                <div className="card-body bg-light">
                                    <form >
                                        <div className="form-group">
                                         <input type="text"MaxLength={100} placeholder='enter text here' className='form-control'onChange={this.messageChange} maxLength={100}/>
                                        </div>
                                    </form>
                                </div>

                                <div className="card-footer">
                                    <p className="lead text-white">{this.state.raja.message}</p>
                                    <p className="text-white">{this.state.raja.max}/100</p>
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