import React from 'react';

class Counter2 extends React.Component{
     constructor(props){
        super(props);
         this.state={
           raja:{
            name:'rajasekhar',
            age:24,
            location:'kadapa',
            counter: 0,
           }
         }
     }

     IncrementValue=()=>
     {
        //alert('this is increment value')

        // this.setState({
        //     counter: 20,
        //  });

        this.setState({
            raja:{
                ...this.state.raja,
                counter: this.state.raja.counter+1,
                place:'hydrabad',
            }
         });
     }

     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre> 
                <h1 className='text-warning'>{this.state.raja.counter}</h1>
                <button onClick={this.IncrementValue} className="btn btn-primary">increment</button>
            </React.Fragment>
        );

     }
}

export default Counter2;