import React from "react";
import ComponentThree from "./ComponentThree";
interface IProps
{
    
}
interface IState
{

}
class ComponentTwo extends React.Component<IProps,IState>
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
                      <div className="card-body bg-info text-white">
                        <h3>ComponentTwo</h3>
                        <ComponentThree/>
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
export default ComponentTwo;