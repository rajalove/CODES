import axios, { AxiosResponse } from "axios";
import React from "react";
import { IEmployees } from '../Models/IEmployees';
import {NavLink} from 'react-router-dom';

interface IProps
{
    
}
interface IState
{
    employees:IEmployees[];
    errorMsg:string;
}
class EmployeeDetails extends React.Component<IProps,IState>
{
    
    constructor (props:IProps)
    {
        super(props);
        this.state={
            employees:[] as IEmployees[],
            errorMsg:''
        }
    }
    //serverCalls
    componentDidMount():void
    {
        let dataURL:string=`https://gist.githubusercontent.com/subhamshaw16797/b49ea5c60d2baf21b29a08cfcafb10ed/raw/414041bd329e6915e11161c9188552ceb3a73329/contact070821`;
        axios.get(dataURL).then((response:AxiosResponse<any>)=>
        {
            this.setState(
                {
                    ...this.state,
                    employees:response.data
                }
            )
        }).catch((error)=>
        {
            this.setState(
                {
                    ...this.state,
                    errorMsg:error.message
                }
            )
        })
    }


   render()
    {
        let {employees} = this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-light table-hover table-striped text-center table-bordered border-primary">
                                <thead className="table table-primary">
                                    <tr>
                                        <th>S.No.</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>AGE</th>
                                        <th>PHONE</th>
                                        <th>LOCATION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.length>0 &&
                                        employees.map((employee)=>
                                        {
                                            return(
                                                <tr className='table rgba-blue-grey-light' key={employee.login.uuid}>
                                                    <td>{employee.login.uuid.substring(employee.login.uuid.length-4)}</td>
                                                    <td>
                                                        <NavLink to={`/employees/${employee.login.uuid}`}>
                                                        {employee.name.first} {employee.name.last}
                                                        </NavLink>
                                                    </td>
                                                    <td>{employee.email}</td>
                                                    <td>{employee.dob.age}</td>
                                                    <td>{employee.phone}</td>
                                                    <td>{employee.location.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
        )
    }

}
export default EmployeeDetails;