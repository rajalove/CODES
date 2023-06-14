import React, { useEffect, useState } from "react";

let DigitalWatch=()=>
{
    let [currentTime,setcurrentTime]=useState(new Date().toLocaleTimeString());
    let [currentDate]=useState(new Date().toLocaleDateString());
    

    useEffect(()=>
    {     // ____________________________________________componentDidMount();
        let timer=setInterval(()=>
        {
            setcurrentTime(new Date().toLocaleTimeString())
        },1000)

        clearInterval(timer);// ____componentWillUnMount();

    },[]);//________________componentWillUpdate();

    return(
        <React.Fragment>
           <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <p className="h3">digital watch</p>
                            </div>

                            <div className="card-body bg-light text-center">
                                <p className="h3 display-3">{currentTime}</p>
                                <p className="h4">{currentDate}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>
    );
};

export default DigitalWatch;