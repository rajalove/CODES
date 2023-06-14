import React from 'react';
import react from 'react';

interface IProps{}

interface IState{
    Raju:string;
}

class InputUser extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Raju:'',
        }
        
    }

    Hate=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState({
             Raju:event.target.value,
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
                              <div className="card-header bg-dark text-white">
                                  <h2>form</h2>
                              </div>

                              <div className="card-body bg-light text-white">
                                  <form>
                                      <input type="text" placeholder='text here' className='form-control'onChange={this.Hate}/>
                                  </form>
                                  <h2 className='text-dark'>{this.state.Raju}</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
             </react.Fragment>

        )
    }
}
 
export default InputUser;