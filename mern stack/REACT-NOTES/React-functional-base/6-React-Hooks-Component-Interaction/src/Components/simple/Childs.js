import React from "react";

let Childs=(props)=>
{
    return(
        <React.Fragment>
           <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    <p className="h3">child</p>
                                </div>

                                <div className="card-body bg-light p-5">
                                     <p className="h4">child card</p>
                                     <small className="text-danger">{props.father}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
};

export default Childs;