import React from "react";
import { IGithub } from './IGithub';
interface IProps
{
    profile:IGithub
}
interface IState
{

}
class GithubProfileCard extends React.Component<IProps,IState>
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
                <img src={profile.avatar_url} alt=""/>
                <div className="card-body text-center bg-light">
                    <h5 className="card-title text-info">{profile.name}</h5>
                    <p>{profile.bio}</p>
                    <a href={profile.html_url} target="_blank" className="btn btn-success btn-sm" rel="noreferrer">Profile</a>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default GithubProfileCard;