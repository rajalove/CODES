import React from 'react';
import TourCard from './TourCard';
import taj from '../../assets/img/taj.jpg';
import river from '../../assets/img/river.jpeg';

class TourContainers extends React.Component{

     constructor(props){
        super(props)

        this.state ={

            tour:["goa", "thirumala" , "agra" , "himalayas"],

             }
     }
     render(){

        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <TourCard tourImages={taj} tourName={this.state.tour[0]}/>
                            </div>

                            <div className="col-md-3">
                            <TourCard tourImages={river} tourName={this.state.tour[1]}/>
                            </div>

                            <div className="col-md-3">
                            <TourCard tourImages={river} tourName={this.state.tour[2]}/>
                            </div>

                            <div className="col-md-3">
                            <TourCard tourImages={taj} tourName={this.state.tour[3]}/>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        );

     }
}

export default TourContainers;