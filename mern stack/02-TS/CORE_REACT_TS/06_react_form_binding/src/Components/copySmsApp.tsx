import React from "react";
interface IProps
{

}
interface IState
{
    text:string;
    charCount:number;
    maxCount:number;
}
class copySmsApp extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            text:'enter text here',
            charCount:100,
            maxCount:100,
        }
    }

    //updateText()

    updateText=(event:React.ChangeEvent<HTMLTextAreaElement>)=>
    {
        this.setState(
            {
                ...this.state,
                text:event.target.value,
                charCount:this.state.maxCount-event.target.value.length
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
                        <div className="col-md-5 m-auto">
                            <div className="card">
                                <div className="card-header bg-secondary text-white text-center">
                                    <h2>SMS APP</h2>
                                </div>
                                <div className="card-body bg-light">
                                    <form action="">
                                        <textarea maxLength={100} className="form-control" onChange={this.updateText} cols={10} rows={4} ></textarea>
                                    </form>
                                </div>
                                <div className="card-footer bg-secondary text-center text-white">
                                    <h2>The Characters Remaining: 
                                        <span>{this.state.charCount}</span>/100
                                    </h2>
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
export default copySmsApp;