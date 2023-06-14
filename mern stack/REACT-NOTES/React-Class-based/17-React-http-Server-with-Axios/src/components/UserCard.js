import React from 'react';
import axios from 'axios';

class UserCard extends React.Component{
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
        }).catch((error)=>
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
                 <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">User Card</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Totam vero quibusdam dicta quis culpa unde commodi ducimus mollitia hic! Deleniti rerum id fuga molestiae adipisci. Magnam distinctio adipisci beatae. Voluptate?</p>
                              
                              {
                                this.state.users.map((raja)=>
                                {
                                    return(
                                     <div className='col-md-3 d-inline-block'>
                                        <div className='card mt-5 mx-2'>
                                             <div className="card-header rgba-green-light">
                                                <h3 className='text-dark text-center'>{raja.username}</h3>
                                             </div>

                                             <div className="card-body bg-light text-primary">
                                                <p className='text-danger'>S.NO: {raja.id}</p>
                                                <p>USERNAME:{raja.username}</p>
                                     USER EMAIL:<p>{raja.email}</p>
                                                <p>USER ADD:{raja.address.city}</p>
                                             </div>
                                            </div>
                                     </div>
                                    )
                                })
                              }
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );

     }
}

export default UserCard;