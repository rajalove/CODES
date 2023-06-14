import react from 'react';


interface IProps{}

interface IState{
   Raja:string;
}

class Anitha extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
          this.state={
              Raja:'this is a message',
          }
      
    }
    Anu=()=>
    {
        this.setState(
            {
                Raja:'this is changed',
            }
        )
       
    }

    render()
    {
        return(
            <react.Fragment>
                <h1 className="text-center">{this.state.Raja}</h1>
             <div className="text-center">
             <button className="btn btn-danger text-white btn-md"onClick={this.Anu}>click me</button>
             </div>
             </react.Fragment>

        )
    }
}
 
export default Anitha;