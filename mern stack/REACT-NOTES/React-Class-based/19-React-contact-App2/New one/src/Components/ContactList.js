import axios from 'axios';
import React from 'react';

class ContactList extends React.Component{
     constructor(props){
        super(props);

        this.state={
             details:[],
            detailsError:'',
        }

     }

     componentDidMount(){
        this.members();
     }

     members=()=>
     {
        let dataURL='https://gist.githubusercontent.com/rajalove/b6521921f70a7b5f508c3fc54d3ef564/raw/76156ca4c02cfb0eb733d35e15a86d1e41186901/contactlist.json';
        axios.get(dataURL).then((response)=>
        {
            this.setState({
                ...this.state,
                details:response.data,
            });
        }).catch((error)=>
        {
            this.setState({
                ...this.state,
                detailsError:error,
            });
        })
    }

    ClickMe=(data)=>
    {
        // alert('clicked me')
        this.props.sendData(data)
    }
     render(){

        return(
            <React.Fragment>
                  <pre>{JSON.stringify(this.state.details)}</pre>
                  
                  <table className="table table-hover text-center">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>SNO</th>
                            <th>NAME</th>
                            <th>GENDER</th>
                            <th>EMAIL</th>
                            <th>LOCATION</th>
                        </tr>
                    </thead>
                    
                    <tbody className='rgba-blue-light'>
                        {
                            this.state.details.map((data,index)=>
                            {
                                return(
                                <tr key={data.login.uuid} onClick={this.ClickMe.bind(this,data)}>
                                    <td>{index+1}</td>
                                    <td>{data.name.first} {data.name.last}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.email}</td>
                                    <td>{data.location.country}</td>
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