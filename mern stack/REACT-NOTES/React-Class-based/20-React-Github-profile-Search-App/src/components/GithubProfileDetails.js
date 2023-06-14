import React from 'react';

class GithubProfileDetails extends React.Component{
     constructor(props){
        super(props);

     }

     render(){

        return(
            <React.Fragment>
                 <div className="card h-100">
                     {/* <pre>{JSON.stringify(this.props.profileDetails)}</pre> */}
                   <div className="card-header rgba-blue-light">
                       <ul className="rani list-group d-inline">
                       followers: <li className='badge badge-primary badge-pill'>{this.props.profileDetails.followers}</li>
                       gists: <li className='badge badge-primary badge-pill'>{this.props.profileDetails.public_gists}</li>
                        repos: <li className='badge badge-primary badge-pill'>{this.props.profileDetails.public_repos}</li>
                        following: <li className='badge badge-primary badge-pill'>{this.props.profileDetails.following}</li>

                       </ul>
                    </div>
                   <div className="card-body">
                       <div className="groups">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item">User name: {this.props.profileDetails.name}</li>
                            <li className="list-group-item list-group-item">Location:{this.props.profileDetails.location}</li> 
                            <li className="list-group-item list-group-item">Email: {this.props.profileDetails.email}</li>
                            <li className="list-group-item list-group-item">Company: {this.props.profileDetails.company}</li>
                            <li className="list-group-item list-group-item">Blogs: {this.props.profileDetails.blog}</li>
                            <li className="list-group-item list-group-item">Member Since: {this.props.profileDetails.created_at}</li>
                            <li className="list-group-item list-group-item">Profile URL:{this.props.profileDetails.html_url}</li>
                        </ul>
                       </div>
                
                   </div>
                </div>
            </React.Fragment>
        );

     }
}

export default GithubProfileDetails;