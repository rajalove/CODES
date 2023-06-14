import React, { useContext } from "react";
import { Appcontext } from "./context/Appcontext";
import { UserContextApi } from "./context/UserContextApi";

let ComponentC=()=>
{
    let Love=useContext(UserContextApi);  // context hook here
    let app=useContext(Appcontext);
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body rgba-green-light">
                                    <p className="h3">Component C</p>
                              
                              <p className="text-danger">{JSON.stringify(Love)}</p>
                              <p className="text-primary">{JSON.stringify(app)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ComponentC;