import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

let ContactDetails=()=>
{
    let [details,setdetails]=useState({
        employees:{},
    });

    let receivers=(raja)=>
    {
        setdetails({
            ...details,
            employees:raja,
            
        })
    
    }
    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(details)}</pre> */}
           <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">contact app</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eius aliquam quod? Debitis ea, nobis explicabo 
                        asperiores a iure reprehenderit veritatis nemo dicta? Provident deserunt sed, veniam possimus optio voluptas?</p>
                    </div>
                </div>
            </div>
           </section>

            <section>
               <div className="container">
               <div className="row">
                    <div className="col-md-8">
                       <p className="h3">contact list</p>
                       <ContactList SendCName={receivers}/>
                    </div>

                    <div className="col-md-4">
                        <p className="h3">contact card</p>
                        <ContactCard sendData={details.employees}/>
                    </div>
                </div>
               </div>
            </section>
        </React.Fragment>
    );
};

export default ContactDetails;