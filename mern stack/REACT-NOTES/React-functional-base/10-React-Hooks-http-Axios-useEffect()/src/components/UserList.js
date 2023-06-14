import axios from "axios";
import React, { useEffect, useState } from "react";

let UserList=()=>
{
    let[User,setUser]=useState([]);
    let[errorMessage,seterrorMessage]=useState('');

    useEffect(()=>
    {
        // console.log('fetching data from server')
        let dataURL='https://jsonplaceholder.typicode.com/users';
        axios.get(dataURL).then((response)=>
        {
            setUser(response.data);
        }).catch((error)=>
        {
            seterrorMessage(error.message);
        })
    },[]);

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">User List</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt corporis recusandae
                             neque sequi fugiat magni alias saepe et sunt at velit est asperiores iste laudantium repellendus voluptates, ex nihil.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <pre>{JSON.stringify(User)}</pre>

                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>MOBILE NUMBER</th>
                                        <th>LOCATION</th>
                                    </tr>
                                </thead>

                                <tbody className="rgba-blue-light">
                                    {
                                        User.map((raja)=>
                                        {
                                           return(
                                            <tr>
                                            <td>{raja.id}</td>
                                            <td>{raja.username}</td>
                                            <td>{raja.email}</td>
                                            <td>{raja.phone}</td>
                                            <td>{raja.address.city}</td>
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
    );
};

export default UserList;