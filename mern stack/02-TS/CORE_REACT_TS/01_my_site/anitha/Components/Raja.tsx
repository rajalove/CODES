import React from "react";


interface IProps
{
    msg:string;
}
interface IState
{
    
}
class Raja extends React.Component<IProps,IState>
{
   
   render()
    {
        return(
        <React.Fragment>
           <div className="contaniner">
               <div className="row">
                   <div className="col-4">
                       <div className="card">
                           <div className="card-header bg-primary text-center">
                            <h1>raja love</h1>
                           </div>
                           <div className="card-body bg-success text-center">
                           <h1>{this.props.msg}</h1>
                           </div>
                           <div className="card-footer bg-primary text-center">
                               <h1>raja fail</h1>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           
           
        </React.Fragment>
        )
    }

}
export default Raja;