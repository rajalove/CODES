import mongoose from "mongoose"

const productSchema=new mongoose.Schema(
    {
        name:{type:String,required:true,unique:true},
        image:{type:String,required:true},
        price:{type:Number,required:true},
        qty:{type:Number,required:true},
        info:{type:String,required:true}
    },{timestamps:true}
)

const ProductTable=mongoose.model('product',productSchema)

export default ProductTable;