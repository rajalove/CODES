import React from "react";
import axios, { AxiosResponse } from "axios";
import { User } from "./User";

interface IProps
{

}
interface IState
{
    users:User[];
}
class UserList extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            users:[] as User[]
        }
    }

    //server call
    componentDidMount():void
    {
        let dataURL:string=`https://jsonplaceholder.typicode.com/users`;

        axios.get(dataURL).then((response:AxiosResponse<any>)=>
        {
            // console.log(response.data);
            this.setState(
                {
                    users:response.data
                }
            )
        }).catch((error)=>
        {
            console.error(error);
        })
    }
   render()
    {
        let{users}=this.state;
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="table table-hover text-center table-striped table-info">
                                <thead>
                                    <tr>
                                        <th>SNo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.length>0 &&
                                        users.map((user)=>
                                        {
                                            return(
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default UserList;