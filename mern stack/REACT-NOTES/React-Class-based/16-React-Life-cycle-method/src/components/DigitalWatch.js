import React from 'react';

class DigitalWatch extends React.Component{
     constructor(props){
        super(props);
         
        this.state={
            currentTime: new Date().toLocaleTimeString(),
        }

     }
 

     //when the component fully loaded on the DOM

     componentDidMount(){
        this.timer=setInterval(()=>
        {
            this.setState({
                currentTime: new Date().toLocaleTimeString(),
            });
        },1000)
     }

     // whe nthe component is removed from the DOM
     componentWillUnmount(){
        clearInterval(this.timer);
     }
     render(){

        return(
            <React.Fragment>

                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-info">
                                        <p className="h3">digital watch</p>
                                    </div>

                                    <div className="card-body bg-light">
                                        <p className="h3 display-3 text-center">{this.state.currentTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        );

     }
}

export default DigitalWatch;