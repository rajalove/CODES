import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class EmployeeList extends React.Component{
     constructor(props){
        super(props);
       this.state={
        employees:[],
        errorM:'',
       }

     }


    componentDidMount()
    {
        this.getAllEmployees();
    }

    getAllEmployees=()=>
    {
        let dataURL=`https://gist.githubusercontent.com/rajalove/377c0262798da7c77fa662eb415663bb/raw/53e76359f4fb3b3a3f2fd4bd83f9aa05673e8db3/contactmine.json`;
        axios.get(dataURL).then((response)=>
        {
            this.setState({
                ...this.state,
                employees:response.data,
            });
        }).catch((error)=>
        {
            this.setState({
                ...this.state,
               errorM:error,
            });
        })
    }
     render(){

        return(
            <React.Fragment>
             
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Employee info</p>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa laudantium porro dicta, ad expedita,
                                     assumenda magnam sint voluptatem quasi exercitationem quas amet explicabo at eaque, dolorum eius molestias vero.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <pre>{JSON.stringify(this.state.employees)}</pre>
                                {
                                    this.state.employees.length>0?
                                    <React.Fragment>
                                           <table className="table table-hover text-center">
                                            <thead className='bg-secondary text-white'>
                                                <tr>
                                                    <th>SNO</th>
                                                    <th>FULL NAME</th>
                                                    <th>EMAIL</th>
                                                    <th>GENDER</th>
                                                    <th>COUNTRY</th>
                                                    <th>IP ADDRESS</th>
                                                </tr>
                                            </thead>

                                            <tbody className='table-striped rgba-yellow-light'>
                                                {
                                                    this.state.employees.map((emlist)=>
                                                    {
                                                       return(
                                                        <tr key={emlist.id}>
                                                        <td>{emlist.id}</td>
                                                        <td>
                                                            <Link to={`/employees/${emlist.id}`}>
                                                            {emlist.first_name} {emlist.last_name}
                                                            </Link>
                                                            </td>
                                                        <td>{emlist.email}</td>
                                                        <td>{emlist.gender}</td>
                                                        <td>{emlist.country}</td>
                                                        <td>{emlist.ip_address}</td>
                                                    </tr>
                                                       )
                                                    })
                                                }
                                            </tbody>
                                           </table>
                                    </React.Fragment>:null
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default EmployeeList;