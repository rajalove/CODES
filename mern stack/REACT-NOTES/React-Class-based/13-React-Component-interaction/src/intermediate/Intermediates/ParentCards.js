import React from 'react';
import ChildCards from './ChildCards';

class ParentCards extends React.Component{
     constructor(props){
        super(props);

        this.state={
            pText:'',
            cText:'',
    
        }

     }

     Father=(event)=>
     {
        this.setState({
            ...this.state,
            pText:event.target.value,
        });
     }

     ReceivecText=(value)=>
     {
        this.setState({
            ...this.state,
            cText:value,
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
                                    <div className="card-header bg-warning">
                                        <p className="h3 text-white">New Daddy card</p>
                                        <small>{this.state.cText}</small>
                                    </div>

                                    <div className="card-body rgba-yellow-light">
                                        <form className="form"> 
                                            <div className="form-group">
                                                <input onChange={this.Father} type="text"  className='form-control' />
                                            </div>
                                        </form>
                                          
                                          {/* <small>{this.state.pText}</small> */}
                                          

                                        <ChildCards Daddy={this.state.pText} sendData={this.ReceivecText}/>
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

export default ParentCards;