import React from "react";
import ContactCard from "./ContactCard";
import ContactList from './ContactList';
import { IContact } from './IContact';
interface IProps
{

}
interface IState
{
    pContact:IContact;
}
class ContactApp extends React.Component<IProps,IState>
{
    
    constructor (props:IProps)
    {
        super(props);
        this.state={
        pContact:{} as IContact
        }
    }

    //receiveData
    receiveData=(contact:IContact)=>
    {
        this.setState(
            {
                pContact:contact
            }
        )
    }
   render()
    {
        return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-secondary text-center text-decoration-underline">Contact App</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eaque doloremque corporis officia quae, fugit voluptas, sed, quidem earum exercitationem deleniti hic necessitatibus aperiam voluptate ex rerum. Voluptatem quod beatae facere exercitationem blanditiis dignissimos cum autem, explicabo totam, nostrum vero officiis maiores, soluta molestiae ipsa enim. Repellendus corrupti vero doloremque?</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList sendData={this.receiveData}/>
                        </div>
                        <div className="col-md-3">
                            {
                                Object.keys(this.state.pContact).length>0 &&
                                <ContactCard selectedContact={this.state.pContact}/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }

}
export default ContactApp;