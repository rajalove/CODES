import axios from 'axios';
import React from 'react';

class ContactList extends React.Component{
     constructor(props){
        super(props);

        this.state={
            User:[],
            ErrorM:'',
        }
         
     }

  componentDidMount(){
    this.AllEmployees();
  }

     AllEmployees=()=>
     {
        let dataURL='https://gist.githubusercontent.com/rajalove/b6521921f70a7b5f508c3fc54d3ef564/raw/76156ca4c02cfb0eb733d35e15a86d1e41186901/contactlist.json';
       axios.get(dataURL).then((response)=>
        {
        this.setState({
                ...this.state,
                User:response.data,
                
            })
            
        }).catch((error)=>
        {
            this.setState({
                ...this.state,
                ErrorM:error,
            }) 
        })
        
    }
    
     Sender=(lover)=>
     {
        this.props.sendering(lover);
     }

     render(){

        return(
            <React.Fragment>
      <pre>{JSON.stringify(this.state.User)}</pre>

                <table className="table table-hover text-center rgba-blue-light">
                     <thead className="">
                        <tr>
                            <th>sno</th>
                            <th>name</th>
                            <th>image</th>
                            <th>email</th>
                            <th>location</th>
                        </tr>
                     </thead>

                     <tbody>
                        {
                            this.state.User.map((lover)=>
                            {
                                return(
                                    <tr key={lover.login.uuid} onClick={this.Sender.bind(this,lover)}>
                                        <td>{lover.login.uuid.substring(lover.login.uuid.length-6)}</td>
                                        <td>{lover.name.first} {lover.name.last}</td>
                                        <td><img src={lover.picture.large} height={50} width={50} alt="" /></td>
                                        <td>{lover.email}</td>
                                        <td>{lover.location.country}</td>
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