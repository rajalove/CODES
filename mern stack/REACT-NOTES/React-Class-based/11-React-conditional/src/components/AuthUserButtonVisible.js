import React from 'react';

class AuthUserButtonVisible extends React.Component{
     constructor(props){
        super(props);

        this.state={
            isLoggedIn:true,
        }

     }

     login=()=>
     {
        this.setState({
            isLoggedIn:true,
        });
     }

     logOut=()=>
     {
        this.setState({
            isLoggedIn:false,
        });
     }

     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h2>Auth card</h2>
                                </div>

                                <div className="card-body bg-light">
                                    {
                                        this.state.isLoggedIn? 
                                        <button onClick={this.logOut} className="btn btn-danger">LogOut <i class="fa-regular fa-face-sad-tear"></i></button> :
                                         <button onClick={this.login} className="btn btn-primary">logIn <i class="fa-regular fa-face-smile"></i></button>
                                    }
                                   
                                    

                                  {
                                    this.state.isLoggedIn ?
                                    <React.Fragment>
                                          <div className="">
                                        <p className="h3 text-success">wecome raja..!!</p>
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, 
                                            deserunt excepturi cupiditate exercitationem delectus temporibus officiis molestiae at nesciunt quae.</small>
                                    </div>
                                    </React.Fragment> :
                                    
                                    <React.Fragment>
                                         <div className="">
                                        <p className="h3 text-danger">bye bye guest..!!</p>
                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                             Tempore nemo sit sed ullam molestias praesentium magnam ipsa consequuntur dignissimos quaerat.</small>
                                    </div>
                                    </React.Fragment>
                                  } 

                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default AuthUserButtonVisible;