import react from 'react';

interface IProps{}

interface IState{
    
    productDetails:IproductDetails

}


interface IproductDetails
{
   
    sno:string;
    brand:string;
    price:number;
    item:string;
    qnty:number;
}

class Product extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            productDetails:{
                sno:'A1',
                brand:'lenovo',
                price:49000,
                item:'laptop',
                qnty:1,

            }
        }
    }

     //increment quantity function
     incrQty=()=>
     {
         this.setState(
             {
                 productDetails:{
                     ...this.state.productDetails,
                 qnty:this.state.productDetails.qnty+1
                 }
             }
         )
     }
      //decrement quantity function
    decrQty=()=>
    {
        this.setState(
            {
                productDetails:{
                    ...this.state.productDetails,
                qnty:(this.state.productDetails.qnty-1>0)?this.state.productDetails.qnty-1:1
                }
            }
        )
    }
    render()
    {
        let {productDetails}=this.state;

        return(
            <react.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-md-4 m-auto">
                           <div className="card">
                               <div className="card-header bg-secondary">
                                   <h1>details</h1>
                               </div>
                               <div className="card-body bg-light">
                                 <p>S.NUMBDER... { productDetails.sno}</p>
                                 <p>BRAND NAME...{ productDetails.brand}</p>
                                 <p>PRICE  ...   { productDetails.price}</p>
                                 <p>ITEM TYPE... { productDetails.item}</p>
                                 <p>QNTY  ...    <i className="fa fa-plus-circle"onClick={this.incrQty}></i>{ productDetails.qnty}
                                              <i className="fa fa-minus-circle"onClick={this.decrQty}></i></p>
                                 <p>TOTAL   ...  { productDetails.price+productDetails.qnty}</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
             </react.Fragment>

        )
    }
}
 
export default Product;