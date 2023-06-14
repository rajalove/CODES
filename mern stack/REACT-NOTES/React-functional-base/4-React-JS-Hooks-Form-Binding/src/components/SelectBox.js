import React, { useState } from "react";

let SelectBox=()=>
{
    let [details,setDetails]=useState('');

        let Selecting=(event)=>
        {
            setDetails(event.target.value)
        }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(details)}</pre>
           <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <p className="h2">select box</p>
                            </div>

                            <div className="card-body bg-light">
                               <div className="row">
                                <div className="col">
                                    <form action="">
                                        <div className="form-group">
                                        <select onClick={Selecting} name="" id="" className="form-control">
                                    <option value="">select one</option>
                                    <option value="car">car</option>
                                    <option value="bike">bike</option>
                                    <option value="bus">bus</option>
                                    <option value="rain">train</option>
                                </select>
                             </div>
                
                            </form>
                                   
                                </div>
                                <div className="col">
                                <p className="h3">{details}</p>
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

export default SelectBox;