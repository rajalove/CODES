import react from 'react';

interface IProps{}

interface IState{
    Anitha:string;
}

class UserInput extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Anitha:'enter some text here',
        }
          
    }

    Raja=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState({

            Anitha:event.target.value,

        })
    }


    render()
    {
        return(
            <react.Fragment>
               <div className="container mt-5">
                   <div className="row">
                       <div className="col-md-4 m-auto">
                             <div className="card">
                                 <div className="card-header bg-warning">
                                    
                                    <h3>user details</h3>
                                     
                                 </div>

                                 <div className="card-body bg-light">

                                 <form action="form-group">
                                 <input type="text"placeholder="enter some text here"className="form-control"value={this.state.Anitha} onChange={this.Raja}/>
                                 </form>
                                  
                                 <h5>{this.state.Anitha}</h5>
                                 </div>
                             </div>
                       </div>
                   </div>
               </div>
             </react.Fragment>

        )
    }
}
 
export default UserInput;