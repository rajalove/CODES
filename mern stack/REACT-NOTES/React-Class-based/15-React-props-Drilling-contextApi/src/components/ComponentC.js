import React from "react";
import { UserContext } from "./Context/UserContext";

class ComponentC extends React.Component{

    // constructor(props){
    //     super(props);

    // }

    render(){
        return(
            <React.Fragment>

<section className="p-3">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="card">
                     <div className="card-body rgba-red-light">
                        <p className="h4">component C </p>

                    <UserContext.Consumer>

                            {
                                (user)=>{
                                
                                    return(
                                        
                                        <small className="text-danger">{JSON.stringify(user)}</small>
                                        
                                    )

                                }
                            }

                    </UserContext.Consumer>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </section>

            </React.Fragment>
        )
    }

}
export default ComponentC;