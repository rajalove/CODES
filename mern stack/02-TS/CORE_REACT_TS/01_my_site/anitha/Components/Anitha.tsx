import React from "react";

interface IProps
{

}
interface IState
{
    message:string;
}
class Anitha extends React.Component<IProps,IState>
{
  
    constructor (props:IProps)
    {
        super(props)
        this.state={
            message:"Thanks for the gift"
        }
    }
   render()
    {
        return(
        <React.Fragment>
        
            <h1>{this.state.message}</h1>
           
        </React.Fragment>
        )
    }

}
export default Anitha;