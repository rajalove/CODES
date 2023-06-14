import axios, { AxiosResponse } from "axios";
import React from "react";
import { IContact } from "./IContact";
interface IProps
{
    sendData:(contact:IContact)=>void;
}
interface IState
{
    contacts:IContact[];
}
class ContactList extends React.Component<IProps,IState>
{
    constructor (props:IProps)
    {
        super(props);
        this.state={
            contacts: [] as IContact[]
        }
    }

    //serverCalls
    componentDidMount():void
    {
        let dataURL:string=`https://gist.githubusercontent.com/subhamshaw16797/b49ea5c60d2baf21b29a08cfcafb10ed/raw/414041bd329e6915e11161c9188552ceb3a73329/contact070821`;
        axios.get(dataURL).then((response:AxiosResponse<any>)=>
        {
            this.setState(
                {
                    contacts:response.data
                }
            )
        }).catch((error)=>
        {
            console.error(error);
        })
    }

    //get Data
    selectContact=(contact:IContact)=>
    {
        // alert(JSON.stringify(contact))
        this.props.sendData(contact)
    }
   render()
    {
        let{contacts}=this.state;
        return(
        <React.Fragment>
            <table className="table table-dark table-hover table-striped text-center">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.length>0 &&
                        contacts.map((contact)=>
                        {
                            return(
                                <tr onClick={this.selectContact.bind(this,contact)} key={contact.login.uuid}>
                                    <td>{contact.login.uuid.substring(contact.login.uuid.length-4)}</td>
                                    <td>{contact.name.first} {contact.name.last}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.location.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
        )
    }

}
export default ContactList;