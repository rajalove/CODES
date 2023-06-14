
import React from 'react';

class EmployeeDetails extends React.Component{
     constructor(props){
        super(props);
       
          this.state={
            employeeId:this.props.match.params.employee_Id
          }
        
        }

    
     render(){
        
        return(
            <React.Fragment>
               <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Employee details</p>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa laudantium porro dicta, ad expedita,
                                     assumenda magnam sint voluptatem quasi exercitationem quas amet explicabo at eaque, dolorum eius molestias vero.
                                </p>
                           
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-3">
                    <div className="container">
                        <div className="row">
                      <div className="col">
                        <pre>{this.state.employeeId}</pre>
                      </div>  
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default EmployeeDetails;