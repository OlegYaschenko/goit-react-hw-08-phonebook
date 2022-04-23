import propTypes from 'prop-types';
import { FilterLabel, FilterText, FilterInput } from './ContactFilter.styled';

const ContactFilter = ({ value, onChange }) => {
  return (
    <div>
      <FilterLabel>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </div>
  );
};

ContactFilter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default ContactFilter;
