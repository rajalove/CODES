import React from 'react';

class ChildCards extends React.Component{
     constructor(props){
        super(props);

        this.state={
            cText:'',
        }

     }

     Senders=(event)=>
     {
       this.setState({
        cText:event.target.value,
       });

       this.props.sendData(this.state.cText);
     }


     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header  bg-secondary">
                                        <p className="h3 text-white">New kid card</p>
                                        <small>{this.props.Daddy}</small>
                                    </div>

                                    <div className="card-body bg-light">
                                        <form className="form">
                                            <div className="form-group">
                                                <input type="text" className='form-control' value={this.state.cText} onChange={this.Senders} />
                                               </div>

                                               
                                        </form>

                                        {/* <small>{this.state.cText}</small> */}
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

export default ChildCards;