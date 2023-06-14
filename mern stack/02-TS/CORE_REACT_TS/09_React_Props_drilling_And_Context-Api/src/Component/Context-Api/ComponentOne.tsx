import React from "react";
import ComponentTwo from "./ComponentTwo";

interface IProps
{
    
}
interface IState
{

}
class ComponentOne extends React.Component<IProps,IState>
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
                        <h3>ComponentOne</h3>
                        <ComponentTwo/>
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
export default ComponentOne;