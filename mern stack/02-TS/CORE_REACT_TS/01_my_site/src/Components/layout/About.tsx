import React from 'react';
import img1 from './shoe2.jpg';
import img2 from './shoe3.jpg';
import img3 from './shoe4.jpg';

// interface IProps{}

// interface IState{}

// class About extends React.Component<IProps,IState>
// {
  

//     render()
//     {
//         return(
//             <React.Fragment>
          
//                <div className="container">
//                <div className="landing">
//                 <div className="wrapper">
//                     <div className='d-flex flex-column justify-content-center align-items-center text-center h-100'>
//                         <h2>Welcome To TechNext Solution Pvt. Ltd.</h2>
//                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nihil tempora laborum numquam aliquam libero incidunt animi explicabo delectus consectetur sit, modi dicta ut laboriosam impedit dolorem dolore dolores cum. Ullam hic necessitatibus libero illum eaque fugiat nostrum perferendis, excepturi qui, maxime amet eveniet labore dolor et voluptatibus cum vel impedit quas quidem explicabo mollitia iste atque unde. Eaque, quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nihil tempora laborum numquam aliquam libero incidunt animi explicabo delectus consectetur sit, modi dicta ut laboriosam impedit dolorem dolore dolores cum. Ullam hic necessitatibus libero illum eaque fugiat nostrum perferendis, excepturi qui, maxime amet eveniet labore dolor et voluptatibus cum vel impedit quas quidem explicabo mollitia iste atque unde. Eaque, quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nihil tempora laborum numquam aliquam libero incidunt animi explicabo delectus consectetur sit, modi dicta ut laboriosam impedit dolorem dolore dolores cum. Ullam hic necessitatibus libero illum eaque fugiat nostrum perferendis, excepturi qui, maxime amet eveniet labore dolor et voluptatibus cum vel impedit quas quidem explicabo mollitia iste atque unde. Eaque, quisquam.</p>
//                     </div>
//                 </div>
//             </div>
//             </div>
                 
                
//              </React.Fragment>

//         )
//     }
// }

// export default About;
interface IProps
{

}
interface IProducts
{
    sno:string;
    name:string;
    image:string;
    model:string;
    price:number;
    qty:number;
}
interface IState
{
    products:IProducts[]
}
class About extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)

        this.state={
            products:[
                {
                    sno:'1',
                    name:'shoes',
                    model:'puma',
                    image:'',
                    price:2000,
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
                    qty:(product.qty-0>0)?product.qty-1:1
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
                            <h2 className="text-dark text-center">Puma shoe products</h2>
                           

                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-5">
                     <div className="row">
                         <div className="col-sm-4">     
                                <div className="card h-25%">
                                <img src={img1} alt=""/>
                                    <div className="card-body">
                                     {
                                       this.state.products.map((product)=>
                                        {
                                        
                                            return(
                                               <ul>
                                                   <div className="text-center">
                                                <h2 className="text-center"><p key={product.sno}>{product.name}</p></h2>
                                                <h4 className="text-center">MODEL:  {product.model}</h4>
                                                <h4>PRICE:  {product.price.toFixed(2)}</h4>
                                                <h4> QNTY:  <i className="fa fa-minus-circle mx-1" onClick={this.decQty.bind(this,product.sno)}></i>
                                                    {product.qty}
                                                    <i className="fa fa-plus-circle mx-1" onClick={this.incQty.bind(this,product.sno)}></i>
                                                </h4>
                                                <h4>{product.price*product.qty}</h4> </div>   
                                                </ul> 
                                               
                                            )
                                           
                                        })
                                         
                                    } 
                                    
                            </div>
                           </div>
                           </div>
                      
                         <div className="col-sm-4">     
                                <div className="card">
                                <img src={img2} alt=""/>
                                    <div className="card-body">
                                     {
                                       this.state.products.map((product)=>
                                        {
                                        
                                            return(
                                               <ul>
                                                    <div className="text-center">
                                                <p key={product.sno}>{product.name}</p>
                                                <h4 className="text-center">MODEL:  {product.model}</h4>
                                                <h4>PRICE:  {product.price.toFixed(2)}</h4>
                                                <h4> QNTY:  <i className="fa fa-minus-circle mx-1" onClick={this.decQty.bind(this,product.sno)}></i>
                                                    {product.qty}
                                                    <i className="fa fa-plus-circle mx-1" onClick={this.incQty.bind(this,product.sno)}></i>
                                                </h4>
                                                <h4>{product.price*product.qty}</h4></div>
                                                </ul>
                                            )
                                        })
                                    } 
                                      
                            </div>
                           </div>
                           </div>
                       
                       


                                <div className="col-sm-4">     
                                <div className="card">
                                <img src={img3} alt=""/>
                                    <div className="card-body">
                                     {
                                       this.state.products.map((product)=>
                                        {
                                        
                                            return(
                                               <ul>
                                                <li key={product.sno}>{product.name}</li>
                                                <h4 className="text-center">MODEL:  {product.model}</h4>
                                                <h4>PRICE:  {product.price.toFixed(2)}</h4>
                                                <h4> QNTY:  <i className="fa fa-minus-circle mx-1" onClick={this.decQty.bind(this,product.sno)}></i>
                                                    {product.qty}
                                                    <i className="fa fa-plus-circle mx-1" onClick={this.incQty.bind(this,product.sno)}></i>
                                                </h4>
                                                <h4>{product.price*product.qty}</h4>
                                                </ul>
                                            )
                                        })
                                    } 
                                 </div>     
                            </div>
                           </div>
                           </div>    
                        </div>
        </React.Fragment>
        )
    }

}
export default About;
