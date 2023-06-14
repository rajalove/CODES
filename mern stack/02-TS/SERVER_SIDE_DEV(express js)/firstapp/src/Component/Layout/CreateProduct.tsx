import React from "react";
import { IProduct } from './../Models/IProduct';
// import axios from 'axios';

interface IProps
{

}
interface IState
{
    product:IProduct;
}
class CreateProduct extends React.Component<IProps,IState>
{
    constructor (props:IProps)
    {
        super(props);
        this.state={
            product: {} as IProduct
        }
    }

    //update input function
    updateInput=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>
    {
        this.setState(
            {
                product:{
                    ...this.state.product,
                    [event.target.name]:event.target.value
                }
            }
        )
    }

    updateImage= async (event:React.ChangeEvent<HTMLInputElement | any>)=>
    {
        let imageFile:Blob= event.target.files[0];
        let base64Image:string | ArrayBuffer = await this.convertBase64String(imageFile)
        this.setState({
            ...this.state.product,
            product:{
                ...this.state.product,
                image: base64Image.toString()
            }
        });
    };

    convertBase64String= (imageFile:Blob):Promise<string | ArrayBuffer> =>
    {
        return new Promise((resolve, reject)=>
        {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener(`load`, () => {
                if(fileReader.result){
                    resolve(fileReader.result);
                }
                else {
                    reject(`Error Occured`);
                }
            })
        });
    }

    // submitCreateProduct=(event:React.FormEvent<HTMLFormElement>)=>{
    //     event.preventDefault();
    //     //submit Create Product
    //     let dataUrl:string=`http://127.0.0.1:5000/api/products`;
    // }

   render()
    {
        let {product}= this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-success">Create Product:-</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora soluta impedit itaque quasi suscipit. Ea ullam accusantium impedit accusamus nam deserunt ratione autem aspernatur laborum nobis, numquam maiores temporibus! Doloremque perspiciatis eligendi vel voluptate iste corporis numquam blanditiis vitae magnam.</p>
                        </div>
                    </div>
                </div>
            </section>

            <pre>{JSON.stringify(this.state.product)}</pre>
            
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-success text-white text-center">
                                    <h2>Create Product</h2>
                                </div>
                                <div className="card-body rgba-green-light">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Product Name" name="name" onChange={this.updateInput} value={product.name}/>
                                        </div>
                                        <div className="mt-2">
                                            <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={this.updateImage}/>
                                        </div>
                                        <div className="mt-2 form-group">
                                            <input type="number" className="form-control" placeholder="Price" onChange={this.updateInput} name="price" value={product.price}/>
                                        </div>
                                        <div className="mt-2 form-group">
                                            <input type="number" className="form-control" placeholder="Quantity" onChange={this.updateInput} name="qty" value={product.qty}/>
                                        </div>
                                        <div className="mt-2 form-group">
                                            <textarea rows={3} className="form-control" placeholder="Information" onChange={this.updateInput} name="info" value={product.info}/>
                                        </div>
                                        <div className="mt-2 form-group">
                                            <input type="submit" className="btn btn-success" value="Create A Product"/>
                                        </div>
                                    </form>
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
export default CreateProduct;