import React from 'react';


interface IProps
{

}
interface IProducts
{
    sno:string;
    name:string;
    image:string;
    price:number;
    qty:number;
}
interface IState
{
    products:IProducts[]
}
class Home extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)

        this.state={
            products:[
                {
                    sno:'A1',
                    name:'Apple Smart Watch',
                    image:'https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg',
                    price:22000,
                    qty:1
                },
                {
                    sno:'A2',
                    name:'FastTrack Smart Watch',
                    image:'https://staticimg.titan.co.in/Fastrack/Catalog/SWD90059PP06_3.jpg?pView=pdp',
                    price:7000,
                    qty:1
                },
                {
                    sno:'A3',
                    name:'Fossil Smart Watch',
                    image:'https://fossil.scene7.com/is/image/FossilPartners/FTW4012_main?$sfcc_fos_large$',
                    price:18000,
                    qty:1
                },
                {
                    sno:'A4',
                    name:'Noise Smart Watch',
                    image:'https://images-na.ssl-images-amazon.com/images/I/61PBtrwxS%2BL._SL1500_.jpg',
                    price:8000,
                    qty:1
                }
            ]
        }
    }
    //incQty() function
    incQty=(sno:string)=>
    {
        let updatedProduct:IProducts[]=this.state.products.map((product)=>
        {
            if(product.sno===sno)
            {
                return{
                    ...product,
                    qty:product.qty+1
                }
            }
            return product;
        });
        this.setState(
            {
                products:[...updatedProduct]
            }
        )
    }

    //decQty() function
    decQty=(sno:string)=>
    {
        let updatedProduct:IProducts[]=this.state.products.map((product)=>
        {
            if(product.sno===sno)
            {
                return{
                    ...product,
                    qty:(product.qty-1>0)?product.qty-1:1
                }
            }
            return product;
        });
        this.setState(
            {
                products:[...updatedProduct]
            }
        )
    }
   render()
    {
        let {products}=this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-primary">Products Items:- </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam, sint deserunt illo minus ratione voluptatum similique tempora voluptates magni corporis officia aperiam aliquid quia sed ad eos in necessitatibus, unde animi obcaecati? Ad quia qui omnis incidunt, ea dolorem maxime quis eum possimus delectus eligendi illum mollitia explicabo aspernatur aut totam! Aspernatur, asperiores quidem vitae labore alias dolores consectetur.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-secondary table-bordered table-hover text-center table-striped">
                                <thead className="table table-dark">
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Toatal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product)=>
                                        {
                                            return(
                                                <tr>
                                                <td>{product.sno}</td>
                                                <td><img src={product.image} alt=""width={40} height={40}/></td>
                                                <td>{product.name}</td>
                                                <td>&#8377;{product.price.toFixed(2)}</td>
                                                <td><i className="fa fa-minus-circle mx-1" onClick={this.decQty.bind(this,product.sno)}></i>
                                                    {product.qty}
                                                    <i className="fa fa-plus-circle mx-1" onClick={this.incQty.bind(this,product.sno)}></i>
                                                </td>
                                                <td>{product.price*product.qty}</td>
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
        )
    }

}
export default Home;
