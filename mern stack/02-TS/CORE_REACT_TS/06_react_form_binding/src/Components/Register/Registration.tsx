import React from "react";
import { IUser } from "./IUser";
interface IProps
{
    
}
interface IState
{
    user:IUser;
}

class Registration extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            user:
            {
                username:'',
                email:'',
                password:'',
                designation:'',
                bio:'',
                terms:false
            }
        }
    }

    //updateInput()

    updateInput=(event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>)=>
    {
        this.setState(
            {
                user:{
                    ...this.state.user,
                    [event.target.name]:event.target.value
                }
            }
        )
 }

    //updateCheck()

    updateCheck=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
                user:
                {
                    ...this.state.user,
                    [event.target.name]:event.target.checked
                }
            }
        )
    }

    //submitRegister()

    submitRegister=(event:React.FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();
        console.log(this.state.user);
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="card">
                                <div className="card-header bg-warning text-center text-white">
                                    <h2>Registration Form</h2>
                                </div>
                                <div className="card-body bg-light">
                                    <form onSubmit={this.submitRegister}>
                                        <div className="form-group mt-2">
                                            <input type="text" className="form-control" name="username" placeholder="Enter Username" value={this.state.user.username} onChange={this.updateInput}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input type="email" className="form-control" name="email" placeholder="Enter Email ID" value={this.state.user.email} onChange={this.updateInput}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.user.password} onChange={this.updateInput}/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <select name="designaton" className="form-control" onChange={this.updateInput}>
                                                <option>Select Designation</option>
                                                <option>Assosiate Software Engineer</option>
                                                <option>Project Manager</option>
                                                <option>Human Resource</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-2">
                                            <textarea className="form-control" placeholder="Bio-Graphy" name="bio" cols={15} rows={3} onChange={this.updateInput}></textarea>
                                        </div>
                                        <div className="form-group mt-2">
                                            <div className="form-check">
                                                <input onChange={this.updateCheck} className="form-check-input" name="terms" type="checkbox"value="" id="flexCheckDefault"/>
                                                <label className="form-check-label">
                                                Accept Terms & Conditions
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mt-2 text-center">
                                            <input type="submit" className="btn btn-secondary btn-md" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default Registration;