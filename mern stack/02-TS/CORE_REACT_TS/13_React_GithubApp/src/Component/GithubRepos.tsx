import React from "react";
import { IRepos } from './IRepos';
interface IProps
{
    repos:IRepos[];
}
interface IState
{

}
class GithubRepos extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
    }
   render()
    {
        return(
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h3>Github Repositories</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.props.repos.map((repo)=>
                            {
                                return(
                                    <li className="list-group-item" key={repo.git_url}>
                                            <div className="d-flex justify-content-between">
                                                    <span className="h5">
                                                        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                                                    </span>
                                                <span className="badge badge-success mx-1">{repo.stargazers_count} Stars </span>
                                                <span className="badge badge-warning mx-1">{repo.watchers_count} Watchers </span>
                                            </div>
                                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default GithubRepos;