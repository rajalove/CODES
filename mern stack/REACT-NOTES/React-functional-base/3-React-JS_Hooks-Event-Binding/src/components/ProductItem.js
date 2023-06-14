import React, { useState } from "react";

let Productitem=()=>
{
    let [product,setProduct]=useState({
        sno:'1ANB',
        Image:'https://m.media-amazon.com/images/I/512TbOpkIqL._AC_.jpg',
        name:'smart watch',
        price:1500,
        qnty:1,
    });

    let Minus=()=>
    {
        setProduct({
            ...product,
            qnty:(product.qnty-1>0)? product.qnty-1:1
        });
    }

    
    let Plus=()=>
    {
        setProduct({
            ...product,
            qnty:(product.qnty+1<5)? product.qnty+1:5
        });
    }

    return(
        <React.Fragment>

                <pre>{JSON.stringify(product)}</pre>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">cart item</p>
                            <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime et dolorem accusamus? Vel necessitatibus, labore consectetur, 
                            tempore, facilis ea molestiae vitae cupiditate voluptas iure recusandae perferendis quasi debitis itaque!</p>
                       
                       <table className=" table table-hover text-center">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>SNO</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>PRICE</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody className="rgba-blue-light table-striped">

                                        <tr>
                                            <td>{product.sno}</td>
                                            <td><img src={product.Image} height='50px' width='50px' alt="" /></td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <i className="fa fa-minus-circle mx-2"onClick={Minus}></i>
                                                {product.qnty}
                                                <i className="fa fa-plus-circle mx-2"onClick={Plus}></i>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{(product.price*product.qnty)}</td>
                                        </tr>
                
                        </tbody>
                       </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Productitem;