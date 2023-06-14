import React from "react";
interface IProps
{
    message:string;
    sendData:(value:string)=>void
}
interface IState
{
    cMessage:string;
}
class ChildComponent extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            cMessage:"I Am From Child Component"
        }
    }

    //click button
    clickButton=()=>
    {
        // alert("Working");
        this.props.sendData(this.state.cMessage)
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body text-white bg-danger">
                                    <h3>Child Component</h3>
                                    <small>{this.props.message}</small>
                                    <button onClick={this.clickButton} className="btn btn-md btn-light">Send Data To Parent</button>
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
export default ChildComponent;
//https://gist.githubusercontent.com/subhamshaw16797/b49ea5c60d2baf21b29a08cfcafb10ed/raw/414041bd329e6915e11161c9188552ceb3a73329/contact070821