import react from 'react';

interface IProps{}

interface IState{
    Chinni:string;
}

class Love extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Chinni:'where is raja wife',
        }
    }

    Roja=(value:string)=>
    {
     this.setState({
         Chinni:value
     })
    }

    render()
    {
        return(
            <react.Fragment>
               <h1 className="text-center">{this.state.Chinni}</h1>
               <div className="text-center">
               <button className="btn btn-primary text-dark btn-md"onClick={this.Roja.bind(this,'here,i am raja wife')}>
                   click me</button>
               </div>


             </react.Fragment>

        )
    }
}
 
export default Love;