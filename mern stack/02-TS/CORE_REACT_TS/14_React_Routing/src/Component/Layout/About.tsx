import React from "react";

interface IProps
{

}
interface IState
{

}
class About extends React.Component<IProps,IState>
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
                <h2> About </h2>
        </React.Fragment>
        )
    }

}
export default About;