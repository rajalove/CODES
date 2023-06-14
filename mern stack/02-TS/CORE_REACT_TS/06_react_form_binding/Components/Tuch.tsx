import react from 'react';

interface IProps{}

interface IState{
     Anitha:string;
}

class Tuch extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Anitha:'Hi this is normal text',
        }
        
    }
    
    sekhar=()=>
    {

        this.setState({
            Anitha:'this is changed',
        })
    }

   love=(value:string)=>
   {
       this.setState({
            Anitha:value,
       })
   }

  
    
    render()
    {
       
        return(
            <react.Fragment>
               
                <div className="button text-center"> 
                <h2>{this.state.Anitha}</h2>
                    <button className="btn btn-primary"onClick={this.sekhar}>click me</button>
                    <button className="btn btn-primary"onClick={this.love.bind(this,'value is changed')}>click me</button>
                    <button className="btn btn-primary"onClick={()=>this.setState({Anitha:'if can be changed'})}>click me</button>
                </div>
             </react.Fragment>

        )
    }
}
 
export default Tuch;