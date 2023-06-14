import React from 'react';

class SelectBox extends React.Component{
     constructor(props){
        super(props);

               this.state={

                car:'',
               }
     }

UpdatedCar=(event)=>
{
    this.setState({
        [event.target.name]:event.target.value,
    });
}

     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card bg-primary">
                                   <h3>select box</h3>
                                </div>

                                 <div className="card-body bg-light p-4">
                                 <div className="row">
                                 <div className="col-md-5">
                                 <form>
                                    <div className="form-group">
                                     <select name="car" className='form-control' onChange={this.UpdatedCar}>
                                        <option value="" className="">select a car</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Audi" className="">audi</option>
                                        <option value="Roals Royal" className=""> Royal</option>
                                        <option value="Range Rover" className="">Range Rover</option>
                                    </select>
                                    </div>
                                  </form>
                                 </div>
                                   
                                   <div className="col-md-3">
                                    <p className="h5">{this.state.car}</p>
                                   </div>
                                 </div>
                                 </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default SelectBox;