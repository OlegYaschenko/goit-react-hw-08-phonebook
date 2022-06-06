import {
  List,
  ContactCard,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <List>
      {!isLoading &&
        filteredContacts.reverse().map(({ name, id, number }) => {
          return (
            <ContactCard key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <DeleteBtn
                type="button"
                id={id}
                onClick={() => deleteContact(id)}
              >
                Delete
              </DeleteBtn>
            </ContactCard>
          );
        })}
    </List>
  );
};

export default ContactList;
