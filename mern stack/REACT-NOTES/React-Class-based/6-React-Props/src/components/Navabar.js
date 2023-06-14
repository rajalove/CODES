import React from 'react';

class Navabar extends React.Component{
    
     render(){

        return(
            <React.Fragment>
                
                 <section className="p-3 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className='list-group-item'>NAME  : {this.props.name}</li>
                                            <li className='list-group-item text-danger'>AGE   : {this.props.age}</li>
                                            <li className='list-group-item'>CLASS : {this.props.class}</li>

                                        </ul>
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

export default Navabar;