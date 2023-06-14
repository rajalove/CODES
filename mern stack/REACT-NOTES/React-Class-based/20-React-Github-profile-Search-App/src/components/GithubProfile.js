import React from 'react';
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails';

class GithubProfile extends React.Component{
     constructor(props){
        super(props);

     }

     render(){

        return(
            <React.Fragment>
             <div className="container">
             <div className="row">
                <div className="col-md-3">
                    <GithubProfileCard profileCard={this.props.profile}/>
                </div>

                <div className="col-md-8">
                    <GithubProfileDetails profileDetails={this.props.profile}/>
                </div>
              </div>
             </div>
            </React.Fragment>
        );

     }
}

export default GithubProfile;