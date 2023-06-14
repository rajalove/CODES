import React from 'react';

class GithubRepos extends React.Component{
     constructor(props){
        super(props);

     }

     render(){
       
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-header rgba-blue-light">
                        <p className="h3">Repositories</p>
                    </div>

                    <div className="card-body">
                        {/* <pre>{JSON.stringify(this.props.profileRepose)}</pre> */}
                        <div className="group2">
                        <ul className="list-group d-inline">
                          {
                            this.props.profileRepose.map((github)=>
                            {
                                return(
                                    <li className='list-group-item'>
                                    <a href={github.html_url} target='_blank'>{github.name}</a>
                                    <span className="badge badge-success mx-5">{github.stargazers_count}stars</span>
                                    <span className="badge badge-success mx-5">{github.watchers_count}watches</span>
                                </li>
                                    
                                );
                            })
                          }
                        </ul>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );

     }
}

export default GithubRepos;