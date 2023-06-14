import React, { useState } from "react";

let ChangePassword=()=>
{

    let [Secreat,setSecreat]=useState('');

let clicked=(event)=>
{
   if(event.target.checked)
   {
    setSecreat('text')
   }
   else{
    setSecreat('password')
   }
}



    return(
        <React.Fragment>
            <pre>{JSON.stringify(Secreat)}</pre>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                      <div className="card">
                            <div className="card-header bg-success">
                                <p className="h2">Password check</p>
                            </div>

                            <div className="card-body bg-light">
                                <form action="">

                                    <div className="input-group">
                                      <input type={Secreat} className="form-control" />

                                      <div className="input-group-text">
                                        <div className="input-group-append">
                                        <input type="checkbox" className=""onChange={clicked}/>show Password
                                        </div>
                                      </div>
                                    </div>

                                    
                                </form>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ChangePassword;