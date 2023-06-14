import React, { useState } from "react";

let Son=(props)=>
{
    let [sonText]=useState('i am from Son');
    
   let clickedSend=()=>
    {
        props.sendData(sonText);
    }
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-warning">
                                <p className="h3">Son card</p>
                                </div>

                                <div className="card-body bg-light">
                                  <button className="btn btn-primary btn-sm" onClick={clickedSend}>clickme</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Son;