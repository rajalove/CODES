import React from "react";
import { IGithub } from './IGithub';
interface IProps
{
    profile:IGithub
}
interface IState
{

}
class GithubProfileDetails extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
    }
   render()
    {
        let{profile}= this.props
        return(
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-secondary">
                    <span className="badge badge-primary mx-1">{profile.followers} Followers</span>
                    <span className="badge badge-success mx-1">{profile.public_repos} Repository</span>
                    <span className="badge badge-warning mx-1">{profile.public_gists} Gists</span>
                    <span className="badge badge-danger mx-1">{profile.following} Following</span>
                </div>
                <div className="card-body rgba-blue-grey-light">
                    <ul className="list-group">
                        <li className="list-group-item rgba-blue-grey-light">
                            Profile Name: <span>{profile.name}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            Username: <span>{profile.login}</span>
                        </li>
                        <li className="list-group-item rgba-blue-grey-light">
                            ID: <span>{profile.id}</span>
                        </li>
                        <li className="list-group-item bg-light">
                            Email: <span>{profile.email}</span>
                        </li>
                        <li className="list-group-item rgba-blue-grey-light">
                            Profile URL: <a href={profile.html_url} target="_blank" rel="noreferrer">{profile.html_url}</a>
                        </li>
                        <li className="list-group-item bg-light">
                            Created On: {profile.created_at}
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default GithubProfileDetails;