import react from 'react';


interface IProps{
    Raja:string;
}

interface IState{
   
}

class Component2 extends react.Component<IProps,IState>
{
    

    render()
    {
        return(
            <react.Fragment>
               <div>
                //receiving data here
                <h1 className="text-success">{this.props.Raja}</h1>
             
                  </div>
             </react.Fragment>

        )
    }
}
 
export default Component2;