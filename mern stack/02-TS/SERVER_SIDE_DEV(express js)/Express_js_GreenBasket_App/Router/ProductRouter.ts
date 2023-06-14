import express from 'express';
import { IProduct } from './../Models/IProduct';
import ProductTable from '../Models/product';

const productRouter:express.Router=express.Router();

/*
    1.Read All Product Info.
    Method:get()
    url: http://127.0.0.1:5000/api/products
*/

productRouter.get('/products',async(request:express.Request, response:express.Response)=>
{
    try {
        let products=await ProductTable.find();
        response.status(200).json({products:products})
    } catch (error) {
        console.error(error)
    }
})

/*
    2.Read A Product Info.
    Method:get()
    url: http://127.0.0.1:5000/api/products/:productId
*/

productRouter.get('/products/:productId',async(request:express.Request,response:express.Response)=>
{
    let productId:string=request.params.productId;
    try {
        let product=await ProductTable.findById(productId);
        response.status(200).json({product:product})
    } catch (error) {
        console.error(error)
    }
})

/*
    3.Create a product
    Method:post()
    url: http://127.0.0.1:5000/api/products
    Fields: 
*/

productRouter.post('/products',async(request:express.Request,response:express.Response)=>
{
    let newProduct:IProduct={
        name:request.body.name,
        image:request.body.image,
        price:request.body.price,
        qty:request.body.qty,
        info:request.body.info
    }

    try {
        let product=await ProductTable.findOne({name:newProduct.name})

        if(product)
        {
            return response.status(401).json({msg:'Product Already Exist.',product:product})
        }
        product=await new ProductTable(newProduct)
        product=await product.save();//this is the function to insert
        response.status(200).json({msg:'Product is created successfully.', product:product})

    } catch (error) {
        console.error(error)
    }
})

/*
    4.Update a product
    Method:put()
    url: http://127.0.0.1:5000/api/products/:productId
    Fields: 
*/

productRouter.put('/products/:productId',async(request:express.Request,response:express.Response)=>
{
    let productId:string=request.params.productId;

    let updateProduct:IProduct={
        name:request.body.name,
        image:request.body.image,
        price:request.body.price,
        qty:request.body.qty,
        info:request.body.info
    }

    try {
        let product= await ProductTable.findById(productId);

        if(!product)
        {
            return response.status(401).json({msg:'product is not available.'})
        }
        await ProductTable.findByIdAndUpdate(productId,
            {
                $set:updateProduct
            },{new:true})
        
        response.status(200).json({msg:'Product Is Updated'})
    } catch (error) {
        console.error(error);
    }
    
})

/*
    5.Update a product
    Method:delete()
    url: http://127.0.0.1:5000/api/products/:productId
*/

productRouter.delete('/products/:productId',(request:express.Request,response:express.Response)=>
{
    let productId:string=request.params.productId;
    response.status(200).json({msg:'Delete A Product',id:productId})
})



export default productRouter;