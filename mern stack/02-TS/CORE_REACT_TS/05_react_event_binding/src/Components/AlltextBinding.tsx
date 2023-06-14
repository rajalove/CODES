import react from 'react';

interface IProps{}

interface IState{
    Chinni:string;
}

class Prema extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Chinni:'where is raja wife',
        }
    }
    Anu=()=>
    {
        this.setState(
            {
                Chinni:'i dont know,where is she',
            }
        )
       
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
               <button className="btn btn-outline-warning text-white btn-md"onClick={this.Anu}>
                   click me</button>
               <button className="btn btn-outline-info text-dark btn-md"onClick={this.Roja.bind(this,'here,i am raja wife')}>
                   click me</button>
                   <button className="btn btn-outline-secondary text-dark btn-md"onClick={()=>this.setState({Chinni:'please sign here medam',})}>
                   chick me</button>
               </div>


             </react.Fragment>

        )
    }
}
 
export default Prema;