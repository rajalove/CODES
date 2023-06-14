import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let StockList=()=>
{
    let [datas,setdatas]=useState([]);
    let [ErrorMes,setErrorMes]=useState('');

   useEffect(()=>
   {
        AllStock();
   })

   let AllStock=()=>
   {
    let dataURL='https://gist.githubusercontent.com/rajalove/ab203dacca936cb90dd810f9a477754d/raw/6b3710887b78e0ee1ba9452f1b9e6f4f82eb646c/StockData.json';
    axios.get(dataURL).then((response)=>
    {
        setdatas(response.data);
    }).catch((error)=>
    {
        setErrorMes(error)
    })
    }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(datas)}</pre>
                <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">Stock list</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem dicta sed aliquam accusamus
                             ea perferendis labore, cum eos, vitae, ipsam ratione provident porro. Iste debitis reiciendis quo minus corrupti.</p>
                        </div>
                    </div>
                </div>
                </section>

                <section className="p-3">
                   <div className="container">
                   <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th> NAME</th>
                                        <th>INDUSTRY</th>
                                        <th>SECTOR</th>
                                        <th>CURRENCY</th>
                                    </tr>
                                </thead>
                                <tbody className="rgba-blue-light">
                                    {
                                        datas.map((King)=>
                                        {
                                            return(
                                                <tr key={King.id}>
                                                    <td>{King.id}</td>
                                                    <td>
                                                        <Link to={`/stocks/${King.id}`} className='text-danger'>{King.name}</Link>
                                                    </td>
                                                    <td>{King.industry}</td>
                                                    <td>{King.sector}</td>
                                                    <td>{King.currency}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                   </div>
                </section>
        </React.Fragment>
    );
};

export default StockList;