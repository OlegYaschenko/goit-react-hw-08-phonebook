import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Section from 'components/Section/Section';
import { useGetContactsQuery } from 'redux/contactsApi';

function App() {
  const { data: contacts, isLoading } = useGetContactsQuery();
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {contacts?.length > 0 && (
        <>
          <ContactFilter />
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {contacts?.length === 0 && !isLoading && <p>Contact list is empty</p>}
      <ContactList />
    </Section>
  );
}

export default App;
