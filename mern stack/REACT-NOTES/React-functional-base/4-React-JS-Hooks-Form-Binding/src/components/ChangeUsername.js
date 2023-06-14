import React, { useState } from "react";

let ChangeUsername=()=>
{

    let [username,setUsername]=useState('hi anitha');


    let Changing=(event)=>
    {
        setUsername(event.target.value)
    }

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify()}</pre> */}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg-secondary">
                                    <p className="h2">change User name</p>
                                </div>

                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group">
                                            <input onChange={Changing} value={username} type="text" className="form-control" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer rgba-yellow-light">
                                            <p className="h4">{username}</p>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ChangeUsername;