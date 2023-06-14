import React from 'react';

class IntroSection extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){

        return(
            <React.Fragment>
                <section className="p-3 bg-dark text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <p className="h3">Ultimate Destination Here</p>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, consequuntur.
                                </p>
                                <button className="btn btn-light btn-sm">Explore Now</button>

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );

     }
}

export default IntroSection;