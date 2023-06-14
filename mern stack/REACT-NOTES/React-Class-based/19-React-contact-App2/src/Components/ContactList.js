import axios from 'axios';
import React from 'react';

class ContactList extends React.Component{
     constructor(props){
        super(props);
        
        this.state={
            data:[],
            ErrorM:'',
        }


     }

     componentDidMount(){
        this.Details();
     }

     Details=()=>
     {
        let dataURL='https://gist.githubusercontent.com/rajalove/b6521921f70a7b5f508c3fc54d3ef564/raw/76156ca4c02cfb0eb733d35e15a86d1e41186901/contactlist.json';
        axios.get(dataURL).then((response)=>
        {
            this.setState({
                ...this.state,
                data:response.data,
            });
        }).catch((error)=>
        {
            this.setState({
                ...this.state,
                Error:error,
            });
        })
    } 
    
    Clicktime=(details)=>
    {
        this.props.sendData(details);
    }

     render(){

        return(
            <React.Fragment>
                  <pre>{JSON.stringify(this.state.data)}</pre>

                  <table className="table table-hover text-center">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>S.NO</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>LOCATION</th>
                            </tr>
                        </thead>
                        <tbody className="rgba-blue-light table-striped">
                           {
                            this.state.data.map((details,index)=>
                            {
                              return(
                                <tr key={details.login.uuid} onClick={this.Clicktime.bind(this,details)}>
                                <td>{index+1}</td>
                                <td>{details.name.first} {details.name.last}</td>
                                <td>{details.dob.age}</td>
                                <td>{details.email}</td>
                                <td>{details.location.country}</td>
                            </tr>
                              )
                            })
                           }
                        </tbody>
                  </table>
            </React.Fragment>
        );

     }
}

export default ContactList;