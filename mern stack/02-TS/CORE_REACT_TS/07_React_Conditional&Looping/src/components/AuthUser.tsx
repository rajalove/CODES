// import React from "react";
// interface IProps
// {

// }
// interface IState
// {
//     isLoggedIn:boolean;
// }
// class AuthUser extends React.Component<IProps,IState>
// {
//     // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//     constructor (props:IProps)
//     {
//         super(props);
//         this.state={
//             isLoggedIn:false
//         }
//     }

//     //logIn()

//     logIn=()=>
//     {
//         this.setState(
//             {
//                 isLoggedIn:true
//             }
//         )
//     }

//     //logOut()

//     logOut=()=>
//     {
//         this.setState(
//             {
//                 isLoggedIn:false
//             }
//         )
//     }
//    render()
//     {
//         return(
//         <React.Fragment>
//             <section className="mt-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-7">
//                             <div className="card">
//                                 <div className="card-body bg-dark">
//                                     {
//                                         this.state.isLoggedIn? 
//                                         <button className="btn btn-danger btn-md" onClick={this.logOut}>LogOut</button>:
//                                         <button className="btn btn-success btn-md" onClick={this.logIn}>LogIn</button>
//                                     }
//                                     {
//                                         this.state.isLoggedIn? <h1 className="text-white">Welcome User</h1> : 
//                                         <h1 className="text-white">Welcome Guest</h1>
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//         )
//     }

// }
// export default AuthUser;



import React from "react";
interface IProps
{}
interface IState
{
    IslogedIn:boolean;
}
class AuthUser extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            IslogedIn:false
        }

       
    }

    //login........

    login=()=>
    {
        this.setState({
            IslogedIn:true
        })
    }

    //logout.......

    logout=()=>
    {
        this.setState({
            IslogedIn:false
        })
    }
   
      
   render()
    {
        return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-success text-dark">
                                <h1>this is header</h1>
                            </div>

                            <div className="card-body bg-dark text-white">
                               {
                                    this.state.IslogedIn?
                                    <button className="btn btn-outline-danger"onClick={this.logout}>logOut</button>:
                                    <button className="btn btn-outline-white"onClick={this.login}>logIn</button>
                               }

                               {
                                   this.state.IslogedIn?
                                   <h2 className="text-white">this is inside buttton</h2>:
                                   <h2 className="text-white">welcome user</h2>
                                
                               }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
                    
        </React.Fragment>
        )
    }

}
export default AuthUser;