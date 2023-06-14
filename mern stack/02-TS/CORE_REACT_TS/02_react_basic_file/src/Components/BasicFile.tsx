import react from 'react';

interface IProps{}

interface IState{}

class Raja extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
    }

    render()
    {
        return(
            <react.Fragment>
               <div>
                   <h1>Hallo Message</h1>
                  </div>
             </react.Fragment>

        )
    }
}
 
export default Raja;