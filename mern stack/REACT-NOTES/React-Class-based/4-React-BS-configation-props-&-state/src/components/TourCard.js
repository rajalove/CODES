import React from 'react';
import lady from '../assets/img/lady.jpeg';


class TourCard extends React.Component{

    render(){
 
        return(
            <React.Fragment>
                 <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">

                                <img src={lady} alt="" className="img-fluid" />

                                    <div className="card-body">

                                        <p className="h4 card-title">paris</p>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil facere quia recusandae doloremque consequuntur qui omnis expedita tempora voluptatibus!</p>
                                     
                                       <button className="btn btn-dark btn-sm">book now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">

                                <img src={lady} alt="" className="img-fluid" />

                                    <div className="card-body">

                                        <p className="h4 card-title">america</p>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil facere quia recusandae doloremque consequuntur qui omnis expedita tempora voluptatibus!</p>
                                     
                                       <button className="btn btn-dark btn-sm">book now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">

                                <img src={lady} alt="" className="img-fluid" />

                                    <div className="card-body">

                                        <p className="h4 card-title">india</p>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil facere quia recusandae doloremque consequuntur qui omnis expedita tempora voluptatibus!</p>
                                     
                                       <button className="btn btn-dark btn-sm">book now</button>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-md-3">
                                <div className="card">

                                <img src={lady} alt="" className="img-fluid" />

                                    <div className="card-body">

                                        <p className="h4 card-title text-left">england</p>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil facere quia recusandae doloremque consequuntur qui omnis expedita tempora voluptatibus!</p>
                                     
                                       <button className="btn btn-dark btn-sm">book now</button>
                                       
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
export default TourCard;