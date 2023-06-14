import React, { useState } from "react";

let Child=(props)=>
{

   let [childText,setchildText]=useState('');

   let Clicked=(event)=>
   {
        setchildText(event.target.value);
        props.Killer(event.target.value);
   }
   

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="row">
                    <div className="col-md-8 m-auto mt-3">
                        <div className="card">
                            <div className="card-header rgba-green-light">
                                <p className="h3">Child card</p>
                                <small>{props.sendData}</small>
                            </div>

                            <div className="card-body">
                            <form action="" className="">
                                    <div className="inter form-group">
                                        <input type="text" placeholder="child user"value={childText} className="form-control" onChange={Clicked}/>
                                 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Child;