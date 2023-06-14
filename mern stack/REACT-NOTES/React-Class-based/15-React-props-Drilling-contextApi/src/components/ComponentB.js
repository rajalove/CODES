import React from "react";
import ComponentC from "./ComponentC";

class ComponentB extends React.Component{

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
                     <div className="card-body rgba-purple-light">
                        <p className="h4">component B </p>

                        <ComponentC/>

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
export default ComponentB;