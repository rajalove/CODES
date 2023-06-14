import react from 'react';
import {IUser} from'./IUser';

interface IProps{}

interface IState{
    Anitha:IUser;
}

class Raja extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            Anitha:{
                username:'',
                email:'',
                password:'',
                designation:'',
                bio:'',
                terms:false,
            }
        }
    }

    Anu=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>
    {
        this.setState(
            {
           Anitha:{
            ...this.state.Anitha,
            [event.target.name]:event.target.value,
           }
        }
        
        )
    }

    Chinni=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
            Anitha:{
                ...this.state.Anitha,
                [event.target.name]:event.target.checked,

               }

        }

        )
    }
    

    render()
    {
        return(
            <react.Fragment>
              <div className="container mt-3">
                  <div className="row">
                      <div className="col-md-4 m-auto">
                          <div className="card">
                              <div className="card-header bg-danger">
                                  <h1>Registration</h1>
                              </div>

                              <div className="card-body bg-light">
                                  <form >
                                      <div className="form-group">
                                          <input type="text"className='form-control' name="username" placeholder='enter username' value={this.state.Anitha.username} onChange={this.Anu}/>
                                      </div>

                                      <div className="form-group">
                                          <input type="email"placeholder='enter email' name="email" className='form-control' value={this.state.Anitha.email} onChange={this.Anu}/>
                                      </div>

                                      <div className="form-group">
                                          <input type="password"placeholder='enter password' name="password" className='form-control' value={this.state.Anitha.password} onChange={this.Anu}/>
                                      </div>

                                      <div className="form-group">
                                       <select name=""className='form-control'onChange={this.Anu}>
                                           <option>enter Registration</option>
                                           <option>farmer</option>
                                           <option>student</option>
                                           <option>teacher</option>
                                           <option>police</option>
                                           <option>criminal</option>
                                       </select>
                                      </div>

                                      <div className="form-group mt-2">
                                            <textarea className="form-control" placeholder="Bio-Graphy" name="bio" cols={15} rows={3} onChange={this.Anu}></textarea>
                                        </div>
                                        <div className="form-group mt-2">
                                            <div className="form-check">
                                                <input onChange={this.Chinni} className="form-check-input" name="terms" type="checkbox"value="" id="flexCheckDefault"/>
                                                <label className="form-check-label">
                                                Accept Terms & Conditions
                                                </label>
                                            </div>
                                        </div>
                                
                                      <div className="form-group text-center">
                                        <input type="submit" className='btn btn-danger btn-md'/>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             </react.Fragment>

        )
    }
}
 
export default Raja;