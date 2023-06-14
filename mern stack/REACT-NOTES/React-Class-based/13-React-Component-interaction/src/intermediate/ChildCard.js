import React from 'react';

class ChildCard extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header  bg-primary">
                                        <p className="h3 text-white">child card</p>
                                    </div>

                                    <div className="card-body bg-light">
                                        <form className="form">
                                            <div className="form-group">
                                                <input type="text"  className='form-control' value={this.props.Daddy} />
                                             
                                            </div>
                                        </form>
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

export default ChildCard;