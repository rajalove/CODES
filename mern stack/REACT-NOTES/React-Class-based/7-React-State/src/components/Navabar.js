import React from 'react';

class Navabar extends React.Component{

    constructor(props){
        super(props);

        this.state={
            student:[{
                name:"raja",
                age:"24 years",
                class:"bsc(chemistry)"
            },
            {
                name:"roja",
                age:"26 years",
                class:"9th(continued)"
            },
            {
                name:"pallavi",
                age:"21 years",
                class:"Mtech"
            }]
        }

     }

    
     render(){

        return(
            <React.Fragment>
        
                 <section className="p-5 bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card my-5">
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className='list-group-item'>NAME  :{this.state.student[0].name}</li>
                                <li className='list-group-item text-danger'>AGE   :{this.state.student[0].age}</li>
                                            <li className='list-group-item'>CLASS : {this.state.student[0].class}</li>

                                        </ul>
                                    </div>
                                </div>
                                </div>
                               <div className="col-md-4">
                               <div className="card my-5">
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className='list-group-item'>NAME  :{this.state.student[1].name}</li>
                                <li className='list-group-item text-danger'>AGE   :{this.state.student[1].age}</li>
                                            <li className='list-group-item'>CLASS : {this.state.student[1].class}</li>

                                        </ul>
                                    </div>
                                </div>
                               </div>

                               <div className="col-md-4">
                               <div className="card my-5">
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className='list-group-item'>NAME  :{this.state.student[2].name}</li>
                                <li className='list-group-item text-danger'>AGE   :{this.state.student[2].age}</li>
                                            <li className='list-group-item'>CLASS : {this.state.student[2].class}</li>

                                        </ul>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                            
                 </section>

                 <h1 className='multicolor-text text-center display-2'>this is state</h1>
                
            </React.Fragment>
        );

     }
}

export default Navabar;