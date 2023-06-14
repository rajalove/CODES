import React from 'react';
import axios from 'axios';

class UserList extends React.Component{
     constructor(props){
        super(props);

        this.state={
            users:[],
     errorMessage:'',

        }

     }

     componentDidMount(){
        this.AllUsers();
     }


    AllUsers=()=>
     {
        let dataURL='https://jsonplaceholder.typicode.com/users';
        axios.get(dataURL).then((response)=>
        {
           this.setState({
            ...this.state,
            users:response.data,
           });
        }).catch((error)=>                                        //getting data using promises............!!!!!
        {
            this.setState({
                ...this.state,
                errorMessage:error,
            });
        })
     };

     render(){

        return(
            <React.Fragment>
                 {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">User List</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem dicta, provident exercitationem quisquam iste nemo totam expedita soluta, aliquam labore eaque quos?
                                 Dicta quo dolor dolores enim molestias quam vel illo. Tenetur incidunt quod quaerat explicabo, excepturi perspiciatis quidem.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                {
                                    this.state.users.length > 0 ?
                                    <React.Fragment>
                                            <table className="table table-hover text-center table-primary table-striped">
                                                <thead className=' text-primary'>
                                                    <tr>
                                                        <th className='text-danger'>S.NO</th>
                                                        <th>NAME</th>
                                                        <th>EMAIL</th>
                                                        <th>CITY</th>
                                                        <th>PHONE</th>
                                                        <th>WEBSITE</th>
                                                    </tr>
                                                </thead>

                                                <tbody className='text-dark bg-primary'>
                                                    {
                                                        this.state.users.map((employee)=>
                                                        {
                                                            return(
                                                                <tr key={employee.id}>
                                                                    <td className='text-primary'>{employee.id}</td>
                                                                    <td>{employee.name}</td>
                                                                    <td>{employee.email}</td>
                                                                    <td>{employee.address.city}</td>
                                                                    <td>{employee.phone}</td>
                                                                    <td>{employee.website}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                    </React.Fragment> :null
                                }
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );

     }
}

export default UserList