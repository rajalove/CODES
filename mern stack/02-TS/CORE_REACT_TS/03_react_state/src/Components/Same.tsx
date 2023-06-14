import react from 'react';

interface IProps{}

interface IState{
    Raja:string,
}

class Same extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Raja:'hi baby i am state ',
        }
    }

    render()
    {
        return(
            <react.Fragment>
               <div>
                   <h1>Hallo Message</h1>
                <h1>{this.state.Raja}</h1>
                  </div>
             </react.Fragment>

        )
    }
}
 
export default Same;