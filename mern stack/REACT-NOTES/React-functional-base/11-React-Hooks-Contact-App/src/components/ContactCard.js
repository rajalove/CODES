import React from "react";

let ContactCard=(props)=>
{
    return(
        <React.Fragment>
               <pre>{JSON.stringify(props.sendData)}</pre>
         
              {
                Object.keys(props.sendData).length>0?
                <React.Fragment>
                     <div className="rajas">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-primary text-center bg-dark">
                    <img src={props.sendData.picture.large} className="img-thumbnail rounded-circle" height={200} width={200} alt="" /></li>
                    <li className="list-group-item list-group-item-primary"><span className="text-dark">name:</span> {props.sendData.name.first}{props.sendData.name.last}</li>
                    <li className="list-group-item list-group-item-primary"><span className="text-dark">age:</span> {props.sendData.dob.age}yers</li>
                    <li className="list-group-item list-group-item-primary"><span className="text-dark">phone num:</span> {props.sendData.cell}</li>

                </ul>
               </div>
                </React.Fragment>:null
              }
          
        </React.Fragment>
    );
};

export default ContactCard;