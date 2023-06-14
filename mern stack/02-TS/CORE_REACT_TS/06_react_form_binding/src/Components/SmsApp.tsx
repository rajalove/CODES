import react from 'react';

interface IProps{}

interface IState{
    Raja:string;
    count:number;
    countlimit:number;
}

class SmsApp extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Raja:'enter ur text here',
            count:0,
            countlimit:1,
        }
    }


    Anitha=(event:React.ChangeEvent<HTMLTextAreaElement>)=>
    {
     this.setState({
         ...this.state,
         Raja:event.target.value,
         count:this.state.countlimit+event.target.value.length

     })
    }


    render()
    {
        return(
            <react.Fragment>
                  <div className="container mt-5">
                      <div className="row">
                          <div className="col-md-5 m-auto">
                              <div className="card">
                                  <div className="card-header bg-primary text-white">
                                      <h1>sms app</h1>
                                  </div>
                                  <div className="card-body bg-light">
                                      <textarea maxLength={100}className="form-control"onChange={this.Anitha}></textarea>
                                  </div>
                                  <div className="card-footer bg-primary text-white">
                                    <h4>the characters remaining:<span>{this.state.count}</span>/100  
                                      </h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                
             </react.Fragment>

        )
    }
}
 
export default SmsApp;