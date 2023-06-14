import React from 'react';

class ContactCard extends React.Component{
    //  constructor(props){
    //     super(props);

    //  }

     render(){
    //   let{Sekhar}=this.props;
        return(
            <React.Fragment>
                 {
                    Object.keys(this.props.Sekhar).length>0?
                 <React.Fragment>

                        <div className="loves">
                        <div className="card">
                        <div className="card-header bg-primary py-5">
                        <p className="h3">{this.props.Sekhar.name.first}</p>
                        </div>
                        <div className="card-body text-center ">  
                           <small><img src={this.props.Sekhar.picture.large} alt="" className='w-50 rounded-circle img-thumbnail'/></small>   
                               <div className="details">
                                    <div className="row">
                                    <div className="col-md-6">
                                <p>age:</p>
                                <p>contact details:</p>
                                <p>gender:</p>
                                <p>id name:</p>

                             </div>

                            <div className="col-md-5">
                                <p>{this.props.Sekhar.registered.age} yers</p>
                                <p>{this.props.Sekhar.phone}</p>
                                <p>{this.props.Sekhar.gender}</p>
                                <p>{this.props.Sekhar.id.name}</p>
                            </div>
                                    </div>
                               </div>
                           </div>
                        </div>
                        </div>
                 </React.Fragment>:null
                    
                 }
            </React.Fragment>
        );

     }
}

export default ContactCard;
