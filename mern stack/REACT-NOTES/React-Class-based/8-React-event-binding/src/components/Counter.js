import React from 'react';

class Counter extends React.Component{
     constructor(props){
        super(props);
         this.state={
            name:'raja',
            age:24,
            counter: 0,
         }
     }

     IncrementValue=()=>
     {
        //alert('this is increment value')

        // this.setState({
        //     counter: 20,
        //  });

        this.setState({
            counter: this.state.counter+1,
         });
     }

     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre> 
                <h1 className='text-primary'>{this.state.counter}</h1>
                <button onClick={this.IncrementValue} className="btn btn-primary">increment</button>
            </React.Fragment>
        );

     }
}

export default Counter;