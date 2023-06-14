import React from 'react';

class GithubProfileCard extends React.Component{
     constructor(props){
        super(props);

     }

     render(){

        return(
            <React.Fragment>
                <div className="card">
                       {/* <pre>{JSON.stringify(this.props.profileCard)}</pre> */}
                <img src={this.props.profileCard.avatar_url} alt="" className='img-fluid rounded-circle img-thumbnail'/>

                            <div className="card-header">
                                <p className="card-title h3">{this.props.profileCard.name}</p>
                      <p className="">{this.props.profileCard.bio}</p>
                       
                            </div>
                </div>
            </React.Fragment>
        );

     }
}

export default GithubProfileCard;