import React from 'react';

class CartItems extends React.Component{
     
    constructor(props){
        super(props);

        this.state={
            product:{
                sno:'1ABC',
                name:'smart watch',
                image:'https://tighestimepieces.com/wp-content/uploads/2016/10/Watch-background-angle-grey-2.jpg',
                price:1200,
                qty:2,
            }
        }
    }

    IncrementQty=()=>
    {
        this.setState({
            product:{
                ...this.state.product,
                qty:(this.state.product.qty+1 < 5)? this.state.product.qty+1:5,
            }
        });
    }

    DecrementQty=()=>
    {
        this.setState({
            product:{
                ...this.state.product,
                qty:(this.state.product.qty-1>0)? this.state.product.qty-1:1,
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
                                <p className="h3 text-primary">Cart Items</p>

                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis minima vel amet similique doloribus adipisci dolore aspernatur minus,
                                 veritatis dicta nam unde consequatur expedita quaerat, quo provident! Exercitationem, nulla.</p>
                            {/* <pre>{JSON.stringify(this.state)}</pre> */}
                                 <table className="table table-hover table-striped text-center">
                                    <thead className='bg-primary text-white align-center text-center'>
                                        <tr>
                                            <th>S.NO</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-light text-center">
                                        <tr>
                                            <td>{this.state.product.sno}</td>
                                            <td>{this.state.product.name}</td>
                                            <td><img src={this.state.product.image}  height='50' width='50' alt=''/></td>                                        
                                            <td>&#8377;{this.state.product.price}</td>
                                            <td>
                                            <i className='fa fa-minus-circle mx-2' onClick={this.DecrementQty}></i>
                                            {this.state.product.qty}
                                            <i className='fa fa-plus-circle mx-2'onClick={this.IncrementQty}></i></td>

                                            <td>&#8377;{this.state.product.price * this.state.product.qty}</td>
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

export default CartItems;