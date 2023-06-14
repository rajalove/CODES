import React from "react";
interface IProps
{

}
interface IState
{
    currentTime:string;
}
class DigitalWatch extends React.Component<IProps,IState>
{
    private timer:NodeJS.Timeout | undefined

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
            currentTime: new Date().toLocaleTimeString()
        }
    }
    //when the component is fully loaded
    componentDidMount():void
    {
        this.timer= setInterval(()=>
        {
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            })
        },1000)
    }

    //when component is removed from the dom
    componentWillUnmount():void
    {
        if(this.timer instanceof NodeJS.Timeout)
        {
            clearInterval(this.timer)
        }
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
                                <div className="card-header bg-secondary text-white text-center">
                                    <h2>Digital Watch</h2>
                                </div>
                                <div className="card-body text-center">
                                    <h2>{this.state.currentTime}</h2>
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
export default DigitalWatch;