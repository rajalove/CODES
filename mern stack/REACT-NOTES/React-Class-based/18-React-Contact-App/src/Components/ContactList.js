import axios from 'axios';
import React from 'react';

class ContactList extends React.Component{
     constructor(props){
        super(props);

        this.state={
            contacts:[],
            errorMessage:'',
        }

     }

     componentDidMount(){
            this.GetAllContacts();
     }

     GetAllContacts=async()=>
     {
        try {
             
            let dataURL='https://gist.githubusercontent.com/rajalove/b6521921f70a7b5f508c3fc54d3ef564/raw/76156ca4c02cfb0eb733d35e15a86d1e41186901/contactlist.json';
            
            let response= await axios.get(dataURL);
            this.setState({
                ...this.state,
                contacts:response.data,
            })
        } 

        catch (error)
         {
            this.setState({
                ...this.state,
                errorMessage:error,
            })
        }
     }

     clickContact=(raja)=>
     {
        this.props.Killer(raja)
     }

     render(){

        return(
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}

                <table className="table table-hover table-striped text-center">
                    <thead className='bg-dark text-white'>
                       <tr>
                        <th className='text-danger'>SNO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>LOCATION</th>
                       </tr>
                    </thead>

                         <tbody className='rgba-blue-light'>
                            
                              
                                        {
                                this.state.contacts.map((raja,index)=>
                                {
                                    return(
                                        <tr key={raja.login.uuid} onClick={this.clickContact.bind(this,raja)}>
                                            <td className=''>{index+1}</td>
                                            <td>{raja.name.first} {raja.name.last}</td>
                                            <td>{raja.email}</td>
                                            <td>{raja.phone}</td>
                                            <td>{raja.location.country}</td>
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