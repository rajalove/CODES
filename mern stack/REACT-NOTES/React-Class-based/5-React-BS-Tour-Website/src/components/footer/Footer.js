import React from 'react';

class Footer extends React.Component{
   //   constructor(props){
   //      super(props);

   //   }

     render(){

        return(
            <React.Fragment>
                <section className="footer-page">
                  <div className="footer-wrapper">
                     <div className="container p-5">
                        <div className="row">
                           <div className="col-md-3">
                             <h3>Vacations</h3>
                             <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit distinctio, eius fugit, 
                             quos quisquam voluptates eveniet nihil sunt vitae possimus sed dignissimos asperiores? Quod, eveniet mollitia explicabo dicta numquam voluptate aspernatur rerum culpa eaque maiores perspiciatis.
                              Corporis aliquam sint ratione eligendi praesentium atque minus nisi magni, deserunt vitae repellendus tenetur?</p>
                           </div>

                           <div className="col-md-3">
                             <h3>Information</h3>
                             <p>adventure</p>
                             <p>tours</p>
                             <p>hotels</p>
                             <p>Destination</p>
                             <p>enquries</p>
                             <p>online booking</p>
                             <p>spot booking</p>
                             
                             
                           </div>

                           <div className="col-md-3">
                             <h3>Experience</h3>
                             <p>adventure</p>
                             <p>tours</p>
                             <p>hotels</p>
                             <p>Destination</p>
                             <p>enquries</p>
                             <p>online booking</p>
                             <p>spot booking</p>
                            
                           </div>

                           <div className="col-md-3">
                             <h3>Address</h3>
                             <p>Flat : no-flat , road No.01</p>
                             <p>mandaram , kadapa dist</p>
                             <p>andhra pradesh.</p>

                             <div className="d-flex justify-content-between">
                              <i className="fab fa-facebook text-primary fa-2x"></i>
                              <i className="fab fa-twitter text-info fa-2x"></i>
                              <i className="fab fa-instagram text-danger fa-2x"></i>

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

export default Footer;