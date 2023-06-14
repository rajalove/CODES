import React, { useState } from "react";
import CalculatorCard from "./CalculatorCard";
import ServerCard from "./ServerCard";

let MainCard=()=>
{
    let [anitha,setanitha]=useState(0);

    let receiveData=(value)=>
    {
        setanitha(value)
    }
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">

                       <div className="col-md-4">
                       <CalculatorCard sendData={receiveData}/>
                       </div>

                       <div className="col-md-4">
                       <ServerCard SendingServerCard={anitha}/>
                       </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default MainCard;