import React from 'react';

class Home extends React.Component{
   //   constructor(props){
   //      super(props);

   //   }

     render(){

        return(
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center align-items-center  h-100">
                            <h5 className="display-4">React Routing</h5>
                            <p className="small">Welcome to React Js</p>
                
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

     }
}

export default Home;