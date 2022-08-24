import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './styles.css';

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: 'Tugce', phone_number: '123123' },
        { fullname: 'Suleyman', phone_number: '456654' },
        { fullname: 'Hakan', phone_number: '789987' }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
