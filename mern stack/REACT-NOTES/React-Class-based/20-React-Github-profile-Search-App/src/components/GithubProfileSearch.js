import axios from 'axios';
import React from 'react';
import { CLIENT_ID , CLIENT_SECRET } from './credentials/GithubCredentials';
import GithubProfile from './GithubProfile';
import GithubRepos from './GithubRepos';

class GithubProfileSearch extends React.Component{
     constructor(props){
        super(props);

        this.state={
            githubUsername :'',
            githubProfile:{},
            githubRepos:[],  
            errorM:'',
        }
     }

     GithubSearch=(event)=>
     {
        this.setState({
            ...this.state,
            githubUsername:event.target.value,
        });
     }

     clickSearch=(event)=>
     {
        event.preventDefault();
        this.searchProfileInfo(this.state.githubUsername);
        this.searchRepoInfo(this.state.githubUsername);
     };

     searchProfileInfo=(githubUsername)=>
     {
        let dataURL=`https://api.github.com/users/${githubUsername}? client_id=${CLIENT_ID}& client_secret=${CLIENT_SECRET}`; 
        axios.get(dataURL).then((response)=>
        {
            this.setState({
                ...this.state,
                githubProfile:response.data,
            });
        }).catch((error)=>
        {
            this.setState({
                ...this.state,
                errorM:error,
            });
        });
    };

     searchRepoInfo=(githubUsername)=>
     {
        let dataURL=`https://api.github.com/users/${githubUsername}/repos? client_id=${CLIENT_ID}& client_secret=${CLIENT_SECRET}`;
     axios.get(dataURL).then((response)=>
     {
        this.setState({
            ...this.state,
            githubRepos:response.data,
        });

     }).catch((error)=>
     {
        this.setState({
          ...this.state,
            errorM:error,
        });
     });
    };

     render(){

        return(
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                 <section className="p-3 bg-success">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h1 text-white">Github profile search App</p>
                                <p className="lead">
                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veritatis vero a quo officiis dolor,
                                  soluta veniam minima ipsam corrupti necessitatibus accusamus, aut modi nisi, tempore praesentium numquam nesciunt sunt!
                                </p>

                                <form  onSubmit={this.clickSearch} className='form-inline d-flex'>
                                    <div className="form-group">
                                        <input type="text" placeholder='Github username' className='form-control'
                                        name=' githubUsername' value={this.state.githubUsername} onChange={this.GithubSearch}/>
                                    </div>

                                    <input type="submit" className='btn btn-primary btn-sm' value='search'/>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                 </section>


                 <section className="p-3">
                   <div className="container">
                    <div className="row">
                        <div className="col">
                          {
                            Object.keys(this.state.githubProfile).length>0?
                            <React.Fragment>
                                    <GithubProfile profile={this.state.githubProfile}/>
                            </React.Fragment>:null
                          }
                        </div>
                    </div>
                   </div>
                 </section>


                 <section className="p-3">
                   <div className="container">
                    <div className="row">
                        <div className="col">
                        {
                            Object.keys(this.state.githubRepos).length>0?
                            <React.Fragment>
                                    <GithubRepos profileRepose={this.state.githubRepos}/>
                            </React.Fragment>:null
                          }
                        </div>
                    </div>
                   </div>
                 </section>
            </React.Fragment>
        );

     }
}

export default GithubProfileSearch;