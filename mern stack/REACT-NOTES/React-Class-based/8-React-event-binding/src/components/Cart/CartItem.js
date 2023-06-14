import React from 'react';

class CartItem extends React.Component{
    
    constructor(props)
    {
        super(props);

        this.state={

            product:{
              sno:'10ANB',
            Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriewRqlJrLb1tEnjW03tBXJI-qnMYjcuMUQ&usqp=CAU',
             name:'smart watch',
            price:1500,
            qty:2,
        }
    }
    }

    IncrementQty=()=>
    {
        this.setState({
            product:{
                ...this.state.product,
              qty:(this.state.product.qty+1<5)? this.state.product.qty+1:5,
            }
        });
    }


    DecrementQty=()=>
    {
        this.setState({
            product:{
                ...this.state.product,
              qty: ( this.state.product.qty-1 > 0 )? this.state.product.qty-1: 1,
            }
        });
    }

     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Cart Item</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, unde.
                                 Quidem optio nihil reiciendis vitae ad, sint eum magni iusto ipsam quia,possimus minima quas corrupti nam, harum cumque! Distinctio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                     <pre>{JSON.stringify(this.state)}</pre>

                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover table-striped text-center">
                                <thead className='bg-dark text-white'>
                                       <tr>
                                       <th>S.NO</th>
                                        <th>Image</th>
                                        <th>NAME</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>total</th>
                                       </tr>
                                    </thead>
                                    <tbody className='align-center'>
                                        <tr>
                                            <td>{this.state.product.sno}</td>
                                            <td><img src={this.state.product.Image} width="50" height="50" alt='' /></td>
                                            <td>{this.state.product.name}</td>
                                            <td>&#8377;{this.state.product.price}</td>
                                            <td>
                                               <i className='fa fa-minus-circle mx-2' onClick={this.DecrementQty}></i>
                                            {this.state.product.qty}
                                               <i className='fa fa-plus-circle mx-2'onClick={this.IncrementQty}></i>
                                            </td>
                                            <td>&#8377;{(this.state.product.qty * this.state.product.price)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default CartItem;        