import React from "react";
import ComponentC from "./ComponentC";

let ComponentB=()=>
{
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body rgba-pink-light">
                                    <p className="h3">Component B</p>
                                
                                <ComponentC/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ComponentB;