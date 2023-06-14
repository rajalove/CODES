import React from "react";
import prod1 from '../../Assets/cauliflower.jpg';
interface IProps
{

}
interface IState
{

}
class ProductList extends React.Component<IProps,IState>
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
                            <h3 className="text-success">Product List:-</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora soluta impedit itaque quasi suscipit. Ea ullam accusantium impedit accusamus nam deserunt ratione autem aspernatur laborum nobis, numquam maiores temporibus! Doloremque perspiciatis eligendi vel voluptate iste corporis numquam blanditiis vitae magnam.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <img src={prod1} alt="" className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">Name:-</li>
                                        <li className="list-group-item">Price:-</li>
                                        <li className="list-group-item">Qty:-</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default ProductList;