import React from 'react';

class HobbyRadio extends React.Component{
     constructor(props){
        super(props);

        this.state={
            hobby:null,

        }
     }

   UpdateRadio=(event)=>
    {
        this.setState({
            hobby:event.target.value,
        });
    }   


    render(){

          return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-secondary">
                                        <p className="h3 text-white">hobby selector</p>
                                  </div>

                                    <div className="card-body">
                                   <div className="raja">
                                   <div className="rani col-md-3">

<div class="form-check mx-2">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Eating" onChange={this.UpdateRadio} />
<label class="form-check-label" for="exampleRadios1">
eating
</label>
</div>

<div className="form-check mx-2">
<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Coding" onChange={this.UpdateRadio}/>
<label className="form-check-label" for="exampleRadios2">
coding
</label>
</div>

<div className="form-check mx-2">
<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Sleeping" onChange={this.UpdateRadio}/>
<label className="form-check-label" for="exampleRadios3">
sleeping
</label>
</div>
</div>                
                                   </div>
  
                                           

                                  <div className="col-md-9">
                                               {
                                                this.state.hobby==='Eating' && 
                                                <div className="card mt-2">
                                                <div className="card-body bg-success">
                                                    <p className="h3 text-white"><i className="fa fa-check-circle"></i> Eating</p>
                                                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quis?</small>
                                                </div>
                                            </div>
                                               }

                                                {
                                                    this.state.hobby==='Coding' &&
                                                    <div className="card mt-2">
                                                    <div className="card-body bg-warning">
                                                        <p className="h3 text-white"><i className="fa fa-check-circle"></i> Coding</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloremque.</small>
                                                    </div>
                                                </div>
                                                }

                                                {
                                                    this.state.hobby==='Sleeping' &&
                                                    <div className="card mt-2">
                                                    <div className="card-body bg-secondary">
                                                        <p className="h3 text-white"><i className="fa fa-check-circle"></i> Sleeping</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, expedita.</small>
                                                    </div>
                                                </div>
                                            
                                                }
                                         </div>
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

export default HobbyRadio;