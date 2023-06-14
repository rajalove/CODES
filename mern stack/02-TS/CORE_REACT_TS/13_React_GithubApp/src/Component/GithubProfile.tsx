import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";
import { IGithub } from './IGithub';
interface IProps
{
    profile:IGithub;
}
interface IState
{

}
class GithubProfile extends React.Component<IProps,IState>
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
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            Object.keys(this.props.profile).length>0 &&
                            <GithubProfileCard profile={this.props.profile}/>
                        }
                    </div>
                    <div className="col-md-9">
                        {
                            Object.keys(this.props.profile).length>0 &&
                            <GithubProfileDetails profile={this.props.profile}/>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default GithubProfile;