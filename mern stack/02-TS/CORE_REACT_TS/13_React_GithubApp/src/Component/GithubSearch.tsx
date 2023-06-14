import axios, { AxiosResponse } from "axios";
import React from "react";
import { clientId, clientSecret } from "./GithubClient";
import GithubProfile from "./GithubProfile";
import { IGithub } from './IGithub';
import GithubRepos from './GithubRepos';
import { IRepos } from './IRepos';

interface IProps
{

}
interface IState
{
    userName:string;
    profile:IGithub;
    repos:IRepos[];
}
class GithubSearch extends React.Component<IProps,IState>
{
    constructor (props:IProps)
    {
        super(props);
        this.state={
            userName:'',
            profile:{} as IGithub,
            repos:[] as IRepos[]
        }
    }
    //updateInput
    updateInput=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
        {
            ...this.state,
            userName:event.target.value
        })
    }
    //searchUser
    searchUser=(event:React.FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault();
        this.searchProfile(this.state.userName);
        this.searchRepos(this.state.userName);
    }
    //searching a profile
    searchProfile=(userName:string)=>
    {
        let profileURL:string=`https://api.github.com/users/${this.state.userName}?clientId=${clientId}&clientSecret=${clientSecret}`;
        axios.get(profileURL).then((response:AxiosResponse<any>)=>
        {
            this.setState(
                {
                    ...this.state,
                    profile:response.data
                }
            )
        }).catch((error)=>
        {
            console.error(error)
        })
    }
    //searchRepos
    searchRepos=(userName:string)=>
    {
        let profileURL:string=`https://api.github.com/users/${this.state.userName}/repos?clientId=${clientId}&clientSecret=${clientSecret}`;
        axios.get(profileURL).then((response:AxiosResponse<any>)=>
        {
            this.setState(
                {
                    ...this.state,
                    repos:response.data
                }
            )
        }).catch((error)=>
        {
            console.error(error)
        })
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3 sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <h3>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.searchUser}>
                                        <div className="form-group form-check-inline">
                                            <input value={this.state.userName} onChange={this.updateInput} type="text" placeholder="Enter Github UserName" className="form-control"/>
                                            <input type="submit" value="search" className="btn btn-info btn-sm"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.profile).length>0 && 
                                <GithubProfile profile={this.state.profile}/>
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.profile).length>0 && 
                                <GithubRepos repos={this.state.repos}/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default GithubSearch;