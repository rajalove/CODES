import React from 'react';

class ContactCard extends React.Component{
     constructor(props){
        super(props);
     }
     render(){

        return(
            <React.Fragment>
               {
                  Object.keys(this.props.mydata).length > 0?
                  <React.Fragment>
                     <div className="card">
                   <div className="card-header bg-dark text-white p-5 text-center">
                  </div>

                 <div className="card-body text-center">
               <small><img src={this.props.mydata.picture.large} className='rounded-circle img-thumbnail'/></small><br/>
               <small>Name: {this.props.mydata.name.first}</small><br/>
               <small>Age:{this.props.mydata.dob.age}</small>

                    </div>
                    </div>
                 </React.Fragment>:null
               }
          </React.Fragment>
        );

     }
}

export default ContactCard;