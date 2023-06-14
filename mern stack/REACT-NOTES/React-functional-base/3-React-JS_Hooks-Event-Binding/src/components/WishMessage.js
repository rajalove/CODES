import React,{useState} from "react";

let WishMessage=()=>
{
    let [message,setMessage]=useState('Hallo');
   
   let Morning=()=>
    {
        setMessage('good morning dalling')
    }

    let Evening=(value)=>
    {
        setMessage(value);
    }


    return(
        <React.Fragment>
                    <section className="p-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header bg-secondary ">
                                            <h1>Wish message</h1>
                                        </div>

                                        <div className="card-body bg-light text-center">
                                            <h1>{message}</h1>
                                            <button onClick={Morning} className="btn btn-primary btn-sm">morning</button>
                                            <button onClick={()=>{setMessage('good afternoon')}} className="btn btn-primary btn-sm">afternoon</button>
                                            <button onClick={Evening.bind(this,'good evening')} className="btn btn-primary btn-sm">evening</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </React.Fragment>
    );
};

export default WishMessage;