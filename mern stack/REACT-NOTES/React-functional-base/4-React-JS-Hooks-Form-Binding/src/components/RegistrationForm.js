import React, { useState } from "react";

let RegistrationForm=()=>
{
    let [user,setuser]=useState({
        username:'',
        email:'',
        userpassword:'',
        designation:'',
        box:false,
    });

   let Raja=(event)=>
    {
        setuser({
            ...user,
            [event.target.name]:event.target.value,
        })
    }

let Rani=(event)=>
{
    setuser({
        ...user,
        [event.target.name]:event.target.checked,

        
    })
    // if(user.box=='true'){
    //       alert('form submited successfuly')
    // }
    // else{
    //     alert('error');
    // }
}

let minister=(event)=>
{
    event.preventDefault();
    console.log(user);
}
    return(
        <React.Fragment>
            <pre>{JSON.stringify(user)}</pre>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-danger">
                                    <p className="h2">Registration</p>
                                </div>

                                <div className="card-body">
                                    <form onSubmit={minister} className="" p-2>
                                        <div className="form-group">
                                            <input type="text" placeholder="username" className="form-control" value={user.username} name='username' onChange={Raja}/>
                                        </div>

                                        <div className="form-group mt-2">
                                            <input type="email" placeholder="email"  className="form-control" value={user.email} name='email' onChange={Raja}/>
                                        </div>

                                        <div className="form-group mt-2">
                                            <input type="password" placeholder="password"  className="form-control"value={user.password} name='userpassword' onChange={Raja}/>
                                        </div>

                                        <div className="form-group mt-2">
                                          <select className="form-control" value={user.designation} name='designation' onChange={Raja}>
                                            <option value="">select Course</option>
                                            <option value="mba">MBA</option>
                                            <option value="bcom">Bcom</option>
                                            <option value="mca">MCA</option>
                                            <option value="bsc">Bsc</option>
                                          </select>
                                        </div>
                                   
                                        <div className="form-group mt-2">
                                            <div className="form-check">
                                            <input type="checkbox" className="form-check-input" value={user.box} name='box' onChange={Rani}/>
                                            <label className="form-check-label">terms and conditions</label>
                                            </div>
                                        </div>

                                       <div className="button text-center">
                                       <input type="submit" value="register" className="btn btn-primary btn-md"/>
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

export default RegistrationForm;