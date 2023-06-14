import axios, { AxiosResponse } from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { IStocks } from "../Models/IStocks";
interface IProps
{

}
interface IState
{
    stocks:IStocks[];
    errorMsg:string;
}
class Stocks extends React.Component<IProps,IState>
{
    constructor (props:IProps)
    {
        super(props);
        this.state={
            stocks:[] as IStocks[],
            errorMsg:''
        }
    }

    //serverCalls
    componentDidMount():void
    {
        let stockURL:string=`https://gist.githubusercontent.com/subhamshaw16797/2d1fadf4344633717aff4e7471190f3a/raw/da82a9c7f2d5fdd571367fa53cb185b272818b6f/stock180821`;
        axios.get(stockURL).then((response:AxiosResponse<any>)=>
        {
            this.setState(
                {
                    ...this.state,
                    stocks:response.data
                }
            )
        }).catch((error)=>
        {
            this.setState(
                {
                    ...this.state,
                    errorMsg:error.message
                }
            )
        })
    }
   render()
    {
        let{stocks}= this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className='table table-light table-hover table-striped text-center table-bordered border-primary'>
                                <thead className="table table-primary">
                                    <tr>
                                        <th>Stock ID</th>
                                        <th>Stock Name</th>
                                        <th>Industry</th>
                                        <th>Sector</th>
                                        <th>Market</th>
                                        <th>Currency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stocks.length>0 &&
                                        stocks.map((stock)=>
                                        {
                                            return(
                                                <tr className='table rgba-blue-grey-light' key={stock.stock_id}>
                                                    <td>{stock.stock_id.substring(stock.stock_id.length-4)}</td>
                                                    <NavLink to={`/stocks/${stock.stock_id}`}>
                                                        <td>{stock.stock_name}</td>
                                                    </NavLink>
                                                    <td>{stock.industry}</td>
                                                    <td>{stock.sector}</td>
                                                    <td>{stock.market}</td>
                                                    <td>{stock.currency}</td>
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
export default Stocks;