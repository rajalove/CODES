import React, { useState } from "react";
import Child from "./Child";

let Parent=()=>
{
    let[pText,setpText]=useState('');
    let[cText,setcText]=useState('');

   let ParentData=(event)=>
    {
        setpText(event.target.value);
    }

    let receiveData=(value)=>
    {
        setcText(value);
    }

    return(
        <React.Fragment>
            <pre>{JSON.stringify(pText)}</pre>
            <pre>{JSON.stringify(cText)}</pre>
          <section className="p-3">
            <div className="row">
                <div className="container">
                    <div className="col-md-6 m-auto">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <p className="h3">header</p>
                                <small>{cText}</small>
                            </div>

                            <div className="card-body">
                                <form action="" className="">
                                    <div className="inter form-group">
                                        <input type="text" placeholder="parent user" className="form-control" value={pText} onChange={ParentData}/>
                                 
                                    </div>
                                </form>

                                <Child sendData={pText} Killer={receiveData}/>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </React.Fragment>
    );
};

export default Parent;