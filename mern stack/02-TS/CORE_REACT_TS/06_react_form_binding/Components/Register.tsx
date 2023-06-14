import react from 'react';

interface IProps{}

interface IState{}

class Register extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
    }


    render()
    {
        return(
            <react.Fragment>
              <div className="container mt-5">
                  <div className="row">
                      <div className="col-md-5 m-auto">
                          <div className="card">
                              <div className="card-header bg-secondary">
                                  <h2>header</h2>
                              </div>

                              <div className="card-body bg-light">
                                  <form>
                                      <div className="form-group">
                                          <input type="text" placeholder='user name' className='form-control' />
                                      </div>

                                      <div className="form-group">
                                          <input type="password" placeholder='password' className='form-control' />
                                      </div>

                                      <div className="form-group">
                                          <input type="email" placeholder='email' className='form-control'/>
                                      </div>

                                      <div className="form-group">
                                         <select name="" className="form-control">
                                             <option>select designation</option>
                                             <option>farmer</option>
                                             <option>software</option>
                                             <option>teacher</option>
                                              <option>driver</option>         
                                         </select>
                                      </div>
                                      <div className="form-group mt-2">
                                            <div className="form-check">
                                                <input className="form" name="terms" type="checkbox"value="" id="love"/>
                                                <label className="forms">
                                                Accept Terms & Conditions
                                                </label>
                                            </div>
                                        </div>

<hr />
                                      <div className="form-group text-center">
                                        <input type="submit"className='btn btn-primary' placeholder='email'/>
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
 
export default Register;