import React, { useState } from "react";

let ServerCard=(props)=>
{

    return(
        <React.Fragment>
    
                            <div className="card">
                                <div className="card-header bg-success">
                                    <p className="h3">total</p>
                                </div>

                                <div className="card-body">
                                   <h3>price:{props.SendingServerCard}</h3>
                                </div>
                            </div>
                       
        </React.Fragment>
    );
};

export default ServerCard;