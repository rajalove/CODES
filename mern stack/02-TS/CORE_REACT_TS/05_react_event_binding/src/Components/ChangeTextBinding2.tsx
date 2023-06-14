import react from 'react';

interface IProps{}

interface IState{
    Chinni:string;
}

class Lovely extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Chinni:'she is jungle fellow',
        }
    }

    render()
    {
        return(
            <react.Fragment>
               <h1 className="text-center">{this.state.Chinni}</h1>
               <div className="text-center">
               <button className="btn btn-success text-dark btn-md"onClick={()=>this.setState({Chinni:'ediot,i am not a jungle fellow',})}>
                   chick me</button>
               </div>


             </react.Fragment>

        )
    }
}
 
export default Lovely;