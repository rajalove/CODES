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

                        <small className='text-danger'>{this.props.passing}</small>

                        <ComponentC againSending={this.props.passing}/>

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