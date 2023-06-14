import React, { useState } from "react";

const SmsApp=()=>
{

    const [Sms,setSms]=useState({

        maxcount:0,
        text:'',

    });

const SmsChanging=(event)=>
{
    setSms({
        ...Sms,
        text:event.target.value,
    })
}

    return(
        <React.Fragment>
            <pre>{JSON.stringify(Sms)}</pre>
           <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h2">sms application</p>
                            </div>

                            <div className="card-body bg-light">
                                <textarea name="" maxLength={100} value={Sms.text} id="" cols="" rows="3" className="form-control"onChange={SmsChanging}>

                                </textarea>
                            </div>

                            <div className="card-footer rgba-green-light ">
                                <p className="h3">maximun character count: {Sms.maxcount+Sms.text.length}/100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </section>
        </React.Fragment>
    );
};

export default SmsApp;