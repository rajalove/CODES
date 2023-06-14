import React from 'react';
import SingleTour from './SingleTour';
import lady3 from '../assets/img/lady3.jpg';
import lady4 from '../assets/img/lady4.jpg';



class GroupTour extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {

            tours : ['geetha' , 'latha', 'madhuri' , 'swapna']

        }
      
    }
    
    render(){
            
        return(
            <React.Fragment>
                
                    <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                            <SingleTour cardImage={lady3} cardName={this.state.tours[0]}/>
                                                                   {/* cardName="lover" */}
                            </div>

                            <div className="col-md-3">
                            <SingleTour cardImage={lady4} cardName={this.state.tours[1]} />
                            </div>

                            <div className="col-md-3">
                            <SingleTour cardImage={lady3} cardName={this.state.tours[2]} />
                            </div>
                            

                            <div className="col-md-3">
                            <SingleTour cardImage={lady4} cardName={this.state.tours[3]}/>
                            </div>


                        </div>
                    </div>
                 </section>
            </React.Fragment>
        )
    }
}
export default GroupTour;