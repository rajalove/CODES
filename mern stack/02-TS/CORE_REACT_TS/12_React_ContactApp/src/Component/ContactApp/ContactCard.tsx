import React from "react";
import { IContact } from './IContact';

interface IProps
{
    selectedContact:IContact;
}
interface IState
{

}
class ContactCard extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
    }
   render()
    {
        let {selectedContact}=this.props
        return(
        <React.Fragment>
            <div className="card sticky-top">
                <div className="card-header bg-dark text-center text-white">
                    <h2>Contact Details</h2>
                </div>
                <div className="card-body bg-light text-center">
                    <img src={selectedContact.picture.large} alt="" className="rounded-circle"/>
                    <ul className="list-group-flush mt-2">
                        <li className="list-group-item list-group-item-action">Full Name: {selectedContact.name.first} {selectedContact.name.last}</li>
                        <li className="list-group-item list-group-item-action">Email: {selectedContact.email}</li>
                        <li className="list-group-item list-group-item-action">Gender: {selectedContact.gender}</li>
                        <li className="list-group-item list-group-item-action">DOB: {selectedContact.dob.date}</li>
                        <li className="list-group-item list-group-item-action">City: {selectedContact.location.city}</li>
                        <li className="list-group-item list-group-item-action">Country: {selectedContact.location.country}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default ContactCard;