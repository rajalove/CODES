import React, { useState } from "react";
import Son from "./Son";


let Father=()=>
{
    let [SonTexts,setLoves]=useState('');
    
   let ReceiveData=(value)=>
    {
       setLoves(value);
    }

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="card">
                                <div className="card-header bg-success">
                                    <p className="h3">simple Father card</p>
                                    <small className="text-danger">{SonTexts}</small>
                                </div>
                                
                                <div className="card-body bg-light p-5">
                                    <Son sendData={ReceiveData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Father;