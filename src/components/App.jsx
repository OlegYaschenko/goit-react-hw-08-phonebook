import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Section from 'components/Section/Section';

function App() {
  const isFirstRender = useRef(true);
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (isFirstRender.current) {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        setContacts(parsedContacts);
      }
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const id = nanoid();
    const contactItem = {
      id,
      name,
      number,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => [...prevState, contactItem]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContactList = () => {
    const normilizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
  };

  const deleteContact = e => {
    const contactId = e.currentTarget.id;
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}></ContactForm>
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <ContactFilter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filteredContactList()}
            onDeleleButton={deleteContact}
          />
        </>
      ) : (
        <p>Contact list is empty</p>
      )}
    </Section>
  );
}

export default App;
