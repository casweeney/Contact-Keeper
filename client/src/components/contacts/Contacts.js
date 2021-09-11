import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if(contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered === null ?
                    contacts.map((contact) => {
                        return <CSSTransition key={contact.id} timeout={500} classNames="item">
                                    <ContactItem contact={contact} />
                                </CSSTransition>
                    })
                : 
                    filtered.map((contact) => {
                        return <CSSTransition key={contact.id} timeout={500} classNames="item">
                                    <ContactItem contact={contact} />
                                </CSSTransition>
                    })
                }
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts;