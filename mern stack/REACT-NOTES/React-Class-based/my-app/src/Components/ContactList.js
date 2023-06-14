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
             
            let dataURL='https://gist.githubusercontent.com/saiprasad165/df26223ff90615fc4d52e8340eeb1d4c/raw/406080539c4d557579a0886e61d5f99786d94080/contact-29-02-2023.json';
            
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

     clickContact=(sai)=>
     {
        this.props.Killer(sai)
     }

     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>

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
                                this.state.contacts.length > 0?
                                <React.Fragment>
                                        {
                                this.state.contacts.map((sai,index)=>
                                {
                                    return(
                                        <tr key={sai.id} onClick={this.clickContact.bind(this,sai)}>
                                            <td className=''>{index+1}</td>
                                            <td>{sai.name}</td>
                                            <td>{sai.email}</td>
                                            <td>{sai.phone}</td>
                                            <td>{sai.address.city}</td>  
                                        </tr>
                                     )
                                })
                             }
                                </React.Fragment> : null
                             }
                         </tbody>
                </table>
            </React.Fragment>
        );

     }
}

export default ContactList;
