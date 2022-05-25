import propTypes from 'prop-types';
import {
  List,
  ContactCard,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectedContacts,
  removeContact,
  selectedFilter,
} from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filteredContactList = () => {
    const normilizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
  };

  return (
    <List>
      {filteredContactList().map(({ name, id, number }) => {
        return (
          <ContactCard key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn
              type="button"
              id={id}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactCard>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};

export default ContactList;
