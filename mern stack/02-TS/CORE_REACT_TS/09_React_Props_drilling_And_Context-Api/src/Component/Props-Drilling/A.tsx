import React from "react";
import B from "./B";
import { UserInfo } from "./UserInfo";
interface IProps
{
    userInfo:UserInfo;
}
interface IState
{

}
class A extends React.Component<IProps,IState>
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
            <section className="mt-3">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-body bg-warning text-white">
                        <h3>A Component</h3>
                        <small>{JSON.stringify(this.props.userInfo)}</small>
                        <B userInfo={this.props.userInfo}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </React.Fragment>
        )
    }

}
export default A;