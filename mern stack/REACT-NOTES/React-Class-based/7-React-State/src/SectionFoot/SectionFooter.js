import React from 'react';

class SectionFooter extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){

        return(
            <React.Fragment>
            <section className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="row">
                      <div className="button text-center">
                        <h5>Ultimate Destination Here</h5>
                        <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eos.</p>
                      <button className="btn btn-light btn-sm">Click here</button>
                      </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        );

     }
}

export default SectionFooter;