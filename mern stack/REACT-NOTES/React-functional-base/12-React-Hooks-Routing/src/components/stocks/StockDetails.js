import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

let StockDetails=()=>
{

    let StockIdname =useParams().stockID;

    let [selectedStock,setselectedStock]=useState({});
    let [ErrorM,setErrorM]=useState('');

    useEffect(()=>
    {
        let dataURL='https://gist.githubusercontent.com/rajalove/ab203dacca936cb90dd810f9a477754d/raw/6b3710887b78e0ee1ba9452f1b9e6f4f82eb646c/StockData.json';
        axios.get(dataURL).then((response)=>
        {

            let totalStock = response.data;
            let Raja=totalStock.find(Praba =>Praba.id == StockIdname);

            setselectedStock(Raja);

        }).catch((error)=>
        {
            setErrorM(error);
        })

    })

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(selectedStock)}</pre> */}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Stock Details</p>
                            <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed cumque repellendus quaerat deleniti odit distinctio dolores consectetur incidunt libero tempore doloremque dolorem ea nulla necessitatibus maxime earum recusandae dolor voluptates,
                             et id nesciunt consequatur! Eos error minima excepturi repellendus!</p>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-7 col-mx-6 m-auto">
                                <div className="card">
                                    <div className="card-header bg-dark text-white">
                                        <p className="h3 text-center">Stock details</p>
                                        name: {selectedStock.name}
                                    </div>

                                    <div className="card-body">
                                     {
                                        Object.keys(selectedStock).length>0?

                                        <React.Fragment>
                                               
                                        <div className="loves">
                                            <ul className="list-group">
                                               <li className="list-group-item"><span className="text-danger">Id:</span> {selectedStock.id}</li>
                                               <li className="list-group-item"><span className="text-danger">Industry:</span> {selectedStock.industry}</li>
                                               <li className="list-group-item"><span className="text-danger">Currency:</span> {selectedStock.currency}</li>
                                               <li className="list-group-item"><span className="text-danger">Sector:</span> {selectedStock.sector}</li>
                                            </ul>
                                        </div>
                                        
                                        </React.Fragment>:null
                                     }
                                        
                                    </div>

                                  {/*---------- back button -----------*/}
                                  <div className="card-footer bg-dark text-white">
                                     <Link to='/stocks'className='btn btn-outline-white'>back</Link>
                                     
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

export default StockDetails;