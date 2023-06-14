import React, { useState } from "react";

let CounterFunctional=()=>
{
    let [counter,setABC]=useState(0);

    let Clicked=()=>
    {
        setABC(counter+1)
    }
    return(
        <React.Fragment>

            <h1>{counter}</h1>
            <button onClick={Clicked}
            className="btn btn-primary btn-sm">increments</button>

        </React.Fragment>
    )
}

export default CounterFunctional;