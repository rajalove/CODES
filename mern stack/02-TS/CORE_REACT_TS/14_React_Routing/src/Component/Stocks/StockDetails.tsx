import axios, { AxiosResponse } from "axios";
import React from "react";
import {NavLink, RouteComponentProps} from 'react-router-dom';
import { IStocks } from './../Models/IStocks';

interface IProps extends RouteComponentProps<{stockId:string}>
{

}
interface IState
{
    selectedStock:IStocks | undefined;
    errrorMsg:string;
}
class StocksDetails extends React.Component<IProps,IState>
{
    
    constructor (props:IProps)
    {
        super(props);
        this.state={
            selectedStock:{} as IStocks,
            errrorMsg:''
        }
    }

    //serverCalls
    componentDidMount():void
    {
        let stockURL:string=`https://gist.githubusercontent.com/subhamshaw16797/2d1fadf4344633717aff4e7471190f3a/raw/da82a9c7f2d5fdd571367fa53cb185b272818b6f/stock180821`;
        axios.get(stockURL).then((response:AxiosResponse<any>)=>
        {
            let stock:IStocks[]=response.data;
            let singleStock:IStocks|undefined= stock.find((stock)=>
            {
                return stock.stock_id===this.props.match.params.stockId
            })
            this.setState(
                {
                    ...this.state,
                    selectedStock:singleStock
                }
            )
        }).catch((error)=>
        {
            this.setState(
                {
                    ...this.state,
                    errrorMsg:error.message
                }
            )
        })
    }
   render()
    {
        let{selectedStock}= this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h2 text-primary'>Stock Details</p>
                            <p className='text-info'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint itaque, saepe veniam delectus nostrum a beatae aliquam impedit? Ex amet vero soluta! Quia necessitatibus omnis illum magni consectetur hic, eum repudiandae ea perferendis vero voluptas dolorem quibusdam assumenda maxime repellendus culpa officiis accusantium dolorum maiores? Praesentium porro esse atque, enim soluta neque iusto quos, ullam in deleniti minus voluptate! Possimus.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                {
                    selectedStock!==undefined&&
                    Object.keys(selectedStock).length>0 &&
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className='h2'>{selectedStock.stock_name}</p>
                                    </div>
                                </div>
                                <div className="card-body rgba-blue-light">
                                    <div className="row">
                                        <div className="col">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item rgba-blue-grey-light'>Stock ID: {selectedStock.stock_id}</li>
                                                <li className='list-group-item bg-light'>Industry: {selectedStock.industry}</li>
                                                <li className='list-group-item rgba-blue-grey-light'>Sector: {selectedStock.sector}</li>
                                                <li className='list-group-item bg-light'>Market: {selectedStock.market}</li>
                                                <li className='list-group-item rgba-blue-grey-light'>Currency: {selectedStock.currency}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-primary">
                                    <NavLink to='/stocks/list' className='btn btn-danger btn-md'>
                                        Back
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </React.Fragment>
        )
    }

}
export default StocksDetails;