import React from 'react';

class TourCard extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){

        return(
            <React.Fragment>
        <div className="card">
                <img src={this.props.tourImages} alt="" className='img-fluid'/>
                
                <div className="card-body">

                    <h4 className="card-title">{this.props.tourName}</h4>

                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Illo possimus architecto, dolor repellendus aspernatur id optio obcaecati commodi sint eaque.
                     </p>

               <div className="button text-center">
               <button className="btn btn-dark btn-sm">Book now</button>
               </div>
                </div>
              </div>
            </React.Fragment>
        );

     }
}

export default TourCard;