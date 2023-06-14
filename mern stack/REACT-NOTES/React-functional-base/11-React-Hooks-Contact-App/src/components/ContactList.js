import axios from "axios";
import React, { useEffect, useState } from "react";

let ContactList=(props)=>
{
let [user,setUser]=useState(
    {
         employee:[],
      errorMessage:'',
    });


 useEffect(()=>
    {
        AllContactdetails();
    });

    let AllContactdetails=()=>
    {
        let dataURL='https://gist.githubusercontent.com/rajalove/f38951caaf5b1b82a786272b2113fb73/raw/e10d846d66594cba6a7d3756fce51f7057bf85e5/ContactListHooks.json';
        axios.get(dataURL).then((response)=>
        {
            setUser({
                ...user,
                employee:response.data,
            })
        }).catch((error)=>
        {
            setUser({
                ...user,
                errorMessage:error,
            },[])
        })
    }

    let Clicked=(raja)=>
    {
        props.SendCName(raja);
    }

    return(
        <React.Fragment>
            <pre>{JSON.stringify(user.employee)}</pre>
           <table className="table table-hover table-striped text-center">
                <thead className=" bg-dark text-white">
                    <tr>
                        <th>SNO</th>
                        <th>IMAGE</th>
                        <th>FULLNAME</th>
                        <th>EMAIL</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody className="rgba-blue-light">
                    {
                        user.employee.map((raja)=>
                        {
                            return(
                                <tr key={raja.login.uuid} onClick={Clicked.bind(this,raja)}>
                                    <td>{raja.login.uuid.substring(raja.login.uuid.length-5)}</td>
                                    <td><img src={raja.picture.large} height={50} width={50} alt="" /></td>
                                    <td>{raja.name.first} {raja.name.first}</td>
                                    <td>{raja.email}</td>
                                    <td>{raja.location.country}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
           </table>
        </React.Fragment>
    );
};

export default ContactList;