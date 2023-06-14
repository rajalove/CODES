import react from 'react';

interface IProps{}

interface IState{
     
    text:string;
    count:number;
    maxcount:number;
}

class Message extends react.Component<IProps,IState>
{
   constructor(props:IProps)
   {
       super(props);
       this.state={

               text:'',
               count:0,
               maxcount:0,
           
       }
   }
   
Lover=(event:React.ChangeEvent<HTMLTextAreaElement>)=>
{
    this.setState({
        
 ...this.state,
 text:event.target.value,
 count:this.state.maxcount+event.target.value.length,

    })
}
    
    render()
    {
       
        return(
            <react.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h2>header</h2>
                                </div>
 
                                <div className="card-body bg-light">
                                   <textarea maxLength={100} className="form-control" rows={5} onChange={this.Lover}></textarea>
                                </div>

                                <div className="card-footer bg-primary">
                                    <h2>maximum letters <span className='text-danger'>{this.state.count}</span> /100</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </react.Fragment>

        )
    }
}
 
export default Message;