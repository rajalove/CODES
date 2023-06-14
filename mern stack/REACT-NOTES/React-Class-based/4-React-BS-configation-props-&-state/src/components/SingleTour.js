import React from 'react';

class SingleTour extends React.Component{
 
    render(){

        return(
            <React.Fragment>
                <div className="card">
                 <img src={this.props.cardImage} alt="" className="img-fluid" />
                 <div className="card-body">
                <p className="h4 card-title">{this.props.cardName}</p>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil facere quia recusandae doloremque consequuntur qui omnis expedita tempora voluptatibus!</p>
       <button className="btn btn-danger btn-sm">book now</button>
    </div>
    </div>
            </React.Fragment>
        )
    }
}
export default SingleTour;