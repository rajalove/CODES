import React from "react";
interface IProps
{

}
interface IState
{

}
class UpdateProduct extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
    }
   render()
    {
        return(
        <React.Fragment>
            <h1>UpdateProduct Component</h1>
        </React.Fragment>
        )
    }

}
export default UpdateProduct;