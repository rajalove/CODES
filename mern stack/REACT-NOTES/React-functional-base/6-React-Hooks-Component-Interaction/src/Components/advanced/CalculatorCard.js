import React, { useState } from "react";

let CalculatorCard=(props)=>
{
    let [price,setprice]=useState({
        total:'',
        tax:'',
    });

let Clicking=(event)=>
{
    setprice({
      ...price,
      [event.target.name]:Number(event.target.value),
    })
}

let Raja=(event)=>
{
event.preventDefault();
let tax=price.total*price.tax/100;
let totalAmount=price.total+tax;

props.sendData(totalAmount);
}


    return(
        <React.Fragment>
          <pre>{JSON.stringify(price)}</pre>
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <p className="h3">Calculator</p>
                                </div>

                                <div className="card-body">
                                    <form onSubmit={Raja}>
                                        <div className="form-group">
                                        <input type="number" className="form-control" placeholder="tax"value={price.total} name='total' onChange={Clicking}/>
                                        </div>

                                        <div className="form-group mt-2">
                                            <input type="number" className="form-control" placeholder="tax"value={price.tax} name='tax' onChange={Clicking}/>
                                        </div>

                                        <div className="button text-center mt-2">
                                        <input type="submit" className="btn btn-danger btn-sm"value='enter'/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                       
        </React.Fragment>
    );
};

export default CalculatorCard;