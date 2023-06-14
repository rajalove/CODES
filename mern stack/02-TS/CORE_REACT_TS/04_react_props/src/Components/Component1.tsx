import react from 'react';
import Component2 from './Component2';

interface IProps{}

interface IState{
    Raja:string;
}

class Component1 extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            //here we are sending data component1 to component2
            Raja:'hi baby i am PROPs ',
        }
    }

    render()
    {
        return(
            <react.Fragment>
               <div>  
               <h1><Component2 Raja={this.state.Raja}/></h1>
                  </div>
             </react.Fragment>

        )
    }
}
 
export default Component1;