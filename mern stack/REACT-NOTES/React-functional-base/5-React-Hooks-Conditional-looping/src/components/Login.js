import React, { useState } from "react";

let Login=()=>
{
    let [isLogedIn,setISLogin]=useState(true);

   let  login=()=>
   {
    setISLogin(true);
   } 

   let logOut=()=>
   {
    setISLogin(false);
   } 


    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(isLogedIn)}</pre> */}
            <section className="p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-secondary">
                                    <p className="h2">Login</p>
                                </div>

                                <div className="card-body">
                                {
                                         isLogedIn?
                                       <React.Fragment>
                                        <div className="">
                                <p className="h3 text-success">now its login..!!</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, 
                                    deserunt excepturi cupiditate exercitationem delectus temporibus officiis molestiae at nesciunt quae.</small>
                            </div>
                                       </React.Fragment>:

                                       <React.Fragment>
                                         <div className="">
                                <p className="h3 text-danger">bye bye its logout..!!</p>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Tempore nemo sit sed ullam molestias praesentium magnam ipsa consequuntur dignissimos quaerat.</small>
                            </div>
                                       </React.Fragment>
                                    }
                                    



                                    {
                                      isLogedIn?
                                      <button onClick={logOut} className="btn btn-danger btn-sm mt-5" >logOut</button>:
                                        <button onClick={login} className="btn btn-primary btn-sm mx-5" >login</button>
                                      
                                    }

                                    
                                      
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </React.Fragment>
    );
};

export default Login;