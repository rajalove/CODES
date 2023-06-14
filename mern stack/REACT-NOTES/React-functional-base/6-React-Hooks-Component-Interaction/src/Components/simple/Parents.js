import React, { useState } from "react";
import Childs from "./Childs";

let Parents=()=>
{
    let [Ptext]=useState('this is from parent');
    
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-success">
                                    <p className="h3">simple parent card</p>
                                </div>

                                <div className="card-body bg-light p-5">
                                  
                                    
                                   <div className="row">
                                    <div className="col-md-8 m-auto">
                                    <Childs father={Ptext}/>
                                    </div>
                                   </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Parents;