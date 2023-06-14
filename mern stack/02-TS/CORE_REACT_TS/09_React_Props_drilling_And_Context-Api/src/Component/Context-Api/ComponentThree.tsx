import React from "react";
import UserContext from "./UserContext";
interface IProps
{
    
}
interface IState
{

}
class ComponentThree extends React.Component<IProps,IState>
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
                      <div className="card-body bg-secondary text-white">
                        <h3>ComponentThree</h3>
                        <UserContext.Consumer>
                            {
                                (userInfo:{})=>
                                {
                                    return(
                                        <small>{JSON.stringify(userInfo)}</small>
                                    )
                                }
                            }
                        </UserContext.Consumer>
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
export default ComponentThree;