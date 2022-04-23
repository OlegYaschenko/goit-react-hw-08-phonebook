import propTypes from 'prop-types';
import {
  List,
  ContactCard,
  Name,
  Number,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleleButton }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactCard key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <DeleteBtn type="button" id={id} onClick={onDeleleButton}>
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
  onDeleleButton: propTypes.func.isRequired,
};

export default ContactList;
