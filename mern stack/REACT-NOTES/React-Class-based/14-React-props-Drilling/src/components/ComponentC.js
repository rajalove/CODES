import React from "react";

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
                          <small className='text-danger'>{this.props.againSending}</small>
                          <small>here data willbe came from App App component to A, A to B, B to c...!!!
                             it means we send the data here `App component to component C`</small>
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