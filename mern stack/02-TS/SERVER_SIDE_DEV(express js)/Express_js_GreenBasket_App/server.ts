import express, { response } from 'express';
import dotenv from 'dotenv';
import productRouter from './Router/ProductRouter';

const mongoose=require('mongoose');
const app:express.Application=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended:true})); 

//configure router

app.use('/api', productRouter);


//configure dotenv

dotenv.config({path:'./.env'});

//configure express to receive form data

app.use(express.json());

const hostName:string|undefined=process.env.HOST_NAME;
const port:number|undefined=Number(process.env.PORT);

//configure mongoDb

mongoose.connect("mongodb://127.0.0.1:27017/React-GreenBasket",
    {useNewUrlParser:true}).then((response:any)=>
    {
        console.log("MongoDb Connected Successfully.")
    }).catch((error:any)=>
    {
        console.log(error);
        process.exit(1);
    })


app.get('/',(request:express.Request, response:express.Response)=>
{
    response.status(200).send(`<h2>Express Server For Green Basket Application`);
})

if(port!==undefined && hostName!==undefined)
{
    app.listen(port, hostName, ()=>
    {
        console.log(`Express Server Started At http://${hostName}:${port}`)
    })
}