import React from "react";
interface IProps
{

}
interface IEmployee
{
    sno:string;
    name:string;
    age:number;
    designation:string;
    location:string;
}
interface IState
{
    employee:IEmployee[];
}
class EmployeeCard extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            employee:[
                {
                    sno:'A1',
                    name:'Subham',
                    age:24,
                    designation:'SE',
                    location:'blr'
                },
                {
                    sno:'A2',
                    name:'Suman',
                    age:22,
                    designation:'TL',
                    location:'HYD'
                },
                {
                    sno:'A3',
                    name:'Rahul',
                    age:23,
                    designation:'HR',
                    location:'bbsr'
                }
            ]
        }
    }
   render()
    {
        let{employee}=this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Employee Details:-</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi maiores, repellat mollitia soluta modi dignissimos doloremque ut consequatur vero? Omnis minima corporis modi nostrum. Iste cupiditate asperiores doloribus maxime.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                employee.map((employee)=>
                                {
                                    return(
                                        <div className="card mt-2">
                                            <div className="card-body rgba-deep-purple-strong">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-info">SNO:- {employee.sno}</li>
                                                    <li className="list-group-item list-group-item-dark">NAME:- {employee.name}</li>
                                                    <li className="list-group-item list-group-item-success">AGE:- {employee.age}</li>
                                                    <li className="list-group-item list-group-item-dark">DESIGNATION:- {employee.designation}</li>
                                                    <li className="list-group-item list-group-item-danger">LOCATION:- {employee.location}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default EmployeeCard;