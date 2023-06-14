import React from "react";
interface IProps
{
    pText:string;
    sendData:(value:string)=>void
}
interface IState
{
    cText:string
}
class ChildCard extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            cText:''
        }
    }

    //upateInput
    updateInput=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
                cText:event.target.value
            }
        )
        this.props.sendData(event.target.value)
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
                                <div className="card-body bg-info text-white">
                                   <div className="row">
                                        <div className="col-md-6">
                                        <form>
                                             <div className="form-group">
                                                 <input type="text" placeholder="Child Text" className="form-control" onChange={this.updateInput}/>
                                             </div>
                                        </form>
                                        <small className="text-dark">{this.props.pText}</small>
                                        </div>
                                   </div>
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
export default ChildCard;