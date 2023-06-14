import React, { useState } from "react";

let HobbyRadio=()=>
{

    let [user,setuser]=useState(null);


    let boy=(event)=>
    {
        setuser(event.target.value);
    }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(user)}</pre>
           <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                               <div className="card-header bg-info">
                                 <p className="h2">hobby radio</p>
                               </div>
                               <div className="card-body">
                               <div className="row">
                                    <div className="col-md-4">
                                       <form action="">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" name='Radios' value='river' id="exampleRadios1" onChange={boy}/>
                                                <label className="form-check-label"For="ex1">River</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input"name='Radios' value='mountain'  id="exampleRadios2"  onChange={boy} />
                                                <label className="form-check-label" For="ex2">Mountain</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" name='Radios' value='forest' id="exampleRadios3"  onChange={boy}/>
                                                <label className="form-check-label" For="ex3">Forest</label>
                                            </div>
                                        </div>
                                       </form>
                                    </div>

                                    <div className="col-md-8">
                                       {
                                         user==='river'&&
                                         <div className="card">
                                            <div className="card-body rgba-pink-light">
                                                    <p className="h3">River</p>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur deserunt ipsam nam provident consequuntur illo,
                                                     optio itaque iusto necessitatibus cumque fuga id? Eveniet harum excepturi esse animi quibusdam consequuntur.</p>
                                                </div>
                                         </div>
                                       }

{
                                         user==='mountain'&&
                                         <div className="card">
                                            <div className="card-body rgba-yellow-light">
                                                    <p className="h3">Mountain</p>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur deserunt ipsam nam provident consequuntur illo,
                                                     optio itaque iusto necessitatibus cumque fuga id? Eveniet harum excepturi esse animi quibusdam consequuntur.</p>
                                                </div>
                                         </div>
                                       }

{
                                         user==='forest'&&
                                         <div className="card">
                                            <div className="card-body rgba-purple-light">
                                                    <p className="h3">Forest</p>
                                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur deserunt ipsam nam provident consequuntur illo,
                                                     optio itaque iusto necessitatibus cumque fuga id? Eveniet harum excepturi esse animi quibusdam consequuntur.</p>
                                                </div>
                                         </div>
                                       }
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

export default HobbyRadio;