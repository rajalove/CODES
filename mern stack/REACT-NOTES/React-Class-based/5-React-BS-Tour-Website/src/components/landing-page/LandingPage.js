import React from 'react';

class LandingPage extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){

        return(
            <React.Fragment>
                
                <div className="landing-page">
                    <div className="wrapper">
                        <div className='text-center d-flex flex-column align-center justify-content-center h-100'>
                            <h5 className="display-4"> Welcome to React Tours</h5>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni veritatis nisi tempore facere delectus optio,
                             facilis error modi deleniti reprehenderit aperiam illum sapiente nostrum tempora necessitatibus cupiditate odio molestias.
                             </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

     }
}

export default LandingPage;