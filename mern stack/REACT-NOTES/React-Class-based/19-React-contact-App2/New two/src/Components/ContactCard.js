import React from 'react';

class ContactCard extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){
 
        return(
            <React.Fragment>
               {
                Object.keys(this.props.sendData).length>0?

                    <React.Fragment>
                         <div className="card">
                    <div className="card-header">
                    <p className="h4">card header</p>
                        <img src={this.props.sendData.picture.large} alt="" />
                    </div>
                    <div className="card-body">  
                         <ul className="list-group">
                         <li className="list-group-item list-group-item-secondary">name: {this.props.sendData.name.first}</li>
                         <li className="list-group-item list-group-item-secondary">age: {this.props.sendData.dob.age}</li>
                         <li className="list-group-item list-group-item-secondary">gender: {this.props.sendData.gender}</li>
                         <li className="list-group-item list-group-item-secondary">cell: {this.props.sendData.phone}</li>
                     </ul>
                 </div>
                </div>
                    </React.Fragment>:null
               }
            </React.Fragment>
        );

     }
}

export default ContactCard;
