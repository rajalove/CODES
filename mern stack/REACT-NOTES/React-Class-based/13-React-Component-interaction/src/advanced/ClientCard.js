import React from 'react';

class ClientCard extends React.Component{
     constructor(props){
        super(props);

        this.state={

          price:'',
          gst:'',

        }

     }

     UpdateClient=(event)=>
     {
       this.setState({
         ...this.state,
         [event.target.name]:Number(event.target.value), //price ,and gst string formate we taking in state...
                                                         //so here we change it number type..thats Y we using number
       });
     }

     submitCalculate=(event)=>
     {
      event.preventDefault();
      let tax = this.state.price * this.state.gst/100;
      let total=this.state.price+tax;

     this.props.sendData(total);
      
     }

     render(){

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
               <div className="card">
                  <div className="card-header bg-dark">
                     <p className="h4 text-white">Client Card</p>
                  </div>

                  <div className="card-body bg-light">
                     <form onSubmit={this.submitCalculate}>
                        <div className="form-group">
                        <input type="number" className='form-control' placeholder='product price'
                         onChange={this.UpdateClient} value={this.state.price} name='price' />
                        </div>

                        <div className="form-group mt-3">
                        <input type="number" className='form-control' placeholder='GST(tax)'
                        onChange={this.UpdateClient} value={this.state.gst} name='gst' />
                        
                        </div>

                        <input type="submit" className='btn btn-dark btn-sm' value='calculate total' />
                     </form>
                    
                  </div>
               </div>

            </React.Fragment> 
        );

     }
}

export default ClientCard;