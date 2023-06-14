import React from "react";
import {NavLink, RouteComponentProps} from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { IEmployees } from './../Models/IEmployees';

interface IProps extends RouteComponentProps<{employeeId:string}>
{
    
}
interface IState
{
    selectedEmployee:IEmployees|undefined
    errorMsg:string;
}
class EmployeeDetails extends React.Component<IProps,IState>
{
    
    
    constructor (props:IProps)
    {
        super(props);
        this.state={
            selectedEmployee:{} as IEmployees,
            errorMsg:''
        }
    }
    //serverCalls
    componentDidMount():void
    {
        let dataURL:string= `https://gist.githubusercontent.com/subhamshaw16797/b49ea5c60d2baf21b29a08cfcafb10ed/raw/414041bd329e6915e11161c9188552ceb3a73329/contact070821`;
        axios.get(dataURL).then((response:AxiosResponse<any>)=>
        {
            let employee:IEmployees[]=response.data;
            let singleEmployee:IEmployees | undefined=employee.find((employee)=>
            {
                return employee.login.uuid===this.props.match.params.employeeId
            })
            this.setState(
                {
                    ...this.state,
                    selectedEmployee:singleEmployee
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
        let {selectedEmployee}= this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='text-primary'>Employee Details :-</h2>
                            <p className='text-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi asperiores maiores est officia dignissimos laboriosam voluptas earum, fugit totam beatae suscipit animi eum incidunt in nesciunt aliquam ut perspiciatis natus hic iure aliquid reprehenderit ipsa. Totam soluta dolorem dolorum sunt atque quasi ab illum. Recusandae sapiente perspiciatis praesentium suscipit, voluptates earum modi numquam voluptatem reiciendis assumenda pariatur eveniet aspernatur nobis exercitationem? Earum, commodi autem voluptas vero rem omnis quidem possimus.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-3'>
                {
                    selectedEmployee!==undefined &&
                    Object.keys(selectedEmployee).length>0 &&
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header bg-primary text-white">
                                            <p className='h2'>{selectedEmployee.name.first} {selectedEmployee.name.last}</p>
                                        </div>
                                        <div className="card-body rgba-blue-light">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={selectedEmployee.picture.large} alt="" className='img-fluid img-thumbnail w-50'/>
                                                </div>
                                                <div className="col-md-8">
                                                    <ul className='list-group'>
                                                        <li className='list-group-item rgba-blue-grey-light'>Age: {selectedEmployee.dob.age}</li>
                                                        <li className='list-group-item bg-light'>Phone: {selectedEmployee.phone}</li>
                                                        <li className='list-group-item rgba-blue-grey-light'>Gender: {selectedEmployee.gender}</li>
                                                        <li className='list-group-item bg-light'>Email: {selectedEmployee.email}</li>
                                                        <li className='list-group-item rgba-blue-grey-light'>Location: {selectedEmployee.location.city}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer bg-primary">
                                            <NavLink to='/employees/list' className='btn btn-danger btn-md'>
                                                Back
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>
        </React.Fragment>
        )
    }

}
export default EmployeeDetails;