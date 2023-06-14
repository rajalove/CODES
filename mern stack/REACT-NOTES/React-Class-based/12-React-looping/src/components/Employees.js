import React from 'react';

class Employees extends React.Component{
     constructor(props){
        super(props);

        this.state={
            employees:[{
                id:'AAB101',
                name:'rajasekhar',
                age:24,
                designation:'software engineer',
                location:'hydrabad',

            },
        {
            id:'AAB102',
            name:'ravi naik',
            age:27,
            designation:'IAS',
            location:'thirupati',  
        },
       
      ]

        }

     }

     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                                {
                                    this.state.employees.map((canditate)=>{
                                        return(
                                            <div className="raja col-md-6">
                                            <div className="card">
                                    <div className="card-body bg-primary">

                                        <ul className='list-group'>
                                            <li className="list-group-item">
                                                ID: {canditate.id}
                                            </li>
                                            
                                            <li className="list-group-item">
                                            NAME: {canditate.name}
                                            </li>

                                            <li className="list-group-item">
                                                AGE: {canditate.age}
                                            </li>
                                        
                                            <li className="list-group-item">
                                                DESIGNATION: {canditate.designation}
                                            </li>
                                             
                                            <li className="list-group-item">
                                                LOCATION: {canditate.location}
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default Employees;