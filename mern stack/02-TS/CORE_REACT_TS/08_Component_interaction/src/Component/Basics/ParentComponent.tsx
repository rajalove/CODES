import React from "react";
import ChildComponent from "./ChildComponent";
interface IProps
{

}
interface IState
{
    pMessage:string;
    childMessage:string;
}
class ParentComponent extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            pMessage:"I Am From Parent Component",
            childMessage:''
        }
    }

    //creating a method to receive the data
    receiveData=(value:string)=>
    {
        this.setState(
            {
                ...this.state,
                childMessage:value
            }
        )
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body text-white bg-success">
                                    <h3>Parent Component</h3>
                                    <small>
                                        {this.state.childMessage}
                                    </small>
                                    <ChildComponent message={this.state.pMessage} sendData={this.receiveData}/>
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
export default ParentComponent;