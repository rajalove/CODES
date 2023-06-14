import react from 'react';

interface IProps{}

interface IState{

    Anitha:IAnitha[]

}

interface IAnitha
{
    id:string;
    product:string;
    price:number;
    qnty:number;
    total:number,
    returnOption:string;

}

class ShoppingCart extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
         this.state={
             Anitha:[
                 {
                     id:'A1',
                     product:'watches',
                     price:3000,
                     qnty:1,
                     total:4000,
                     returnOption:'no',

                 },
                 {
                    id:'A2',
                    product:'shirts',
                    price:1400,
                    qnty:1,
                    total:1700,
                    returnOption:'no',

                },
                {
                    id:'A3',
                    product:'mobiles',
                    price:25000,
                    qnty:1,
                    total:26000,
                    returnOption:'no',

                },
                {
                    id:'A4',
                    product:'laptop',
                    price:59999,
                    qnty:1,
                    total:60000,
                    returnOption:'no',

                }
             ]
         }
    }

    render()
    {
        let {Anitha}=this.state;
        return(
            <react.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col m-auto">
    
                                <table className='table table-secondary table-bordered table-hover text-center table-striped'>
                                    <thead className="bg-primary text-white text-center">
                                        <th>SNO</th>
                                        <th>PRODUCT</th>
                                        <th>PRICE</th>
                                        <th>QNTY</th>
                                        <th>TOTAL</th>
                                        <th>REPLACEMENT</th>

                                    </thead>
                                   <tbody className="bg-secondary text-white text-center">
                                   {
                                         Anitha.map((Anitha)=>
                                        {
                                            return(
                                                <tr>
                                                    <td>{Anitha.id}</td>
                                                    <td>{Anitha.product}</td>
                                                    <td>{Anitha.price}</td>
                                                    <td>{Anitha.qnty}</td>
                                                    <td>{Anitha.total}</td>
                                                    <td>{Anitha.returnOption}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                   </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                   
             </react.Fragment>

        )
    }
}
 
export default ShoppingCart;