import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { selectedContacts } from 'redux/contactSlice';

function App() {
  const contacts = useSelector(selectedContacts);
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <ContactFilter />
          <ContactList />
        </>
      ) : (
        <p>Contact list is empty</p>
      )}
    </Section>
  );
}

export default App;
