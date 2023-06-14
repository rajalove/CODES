import React from "react";
import {Link} from 'react-router-dom';
interface IProps
{

}
interface IState
{

}
class ProductAdmin extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
    }
   render()
    {
        return( 
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-success">Product Admin:-</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora soluta impedit itaque quasi suscipit. Ea ullam accusantium impedit accusamus nam deserunt ratione autem aspernatur laborum nobis, numquam maiores temporibus! Doloremque perspiciatis eligendi vel voluptate iste corporis numquam blanditiis vitae magnam.</p>
                            <Link to='/products/create' className="btn btn-success btn-md">Create A Product</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-center">
                                <thead className="bg-dark text-success">
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default ProductAdmin;