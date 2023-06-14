import React from "react";
import ChildCard from "./ChildCard";
interface IProps
{

}
interface IState
{
    pText:string;
    cText:string;
}
class ParentCard extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            pText:'',
            cText:''
        }
    }

    updateInput=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
        this.setState(
            {
                pText:event.target.value
            }
        )
    }

    //receiveData
    receiveData=(value:string):void=>
    {
        this.setState(
            {
                ...this.state,
                cText:value
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
                                <div className="card-body bg-warning text-white">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" placeholder="Parent Text" className="form-control" onChange={this.updateInput} value={this.state.pText}/>
                                                </div>
                                            </form>
                                            <small>{this.state.cText}</small>
                                        </div>
                                    </div>
                                    <ChildCard pText={this.state.pText} sendData={this.receiveData}/>
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
export default ParentCard;