import { useSelector, useDispatch } from 'react-redux';
import { FilterLabel, FilterText, FilterInput } from './ContactFilter.styled';
import { selectedFilter, filter } from 'redux/contactSlice';

const ContactFilter = () => {
  const filterValue = useSelector(selectedFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <FilterLabel>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </FilterLabel>
    </div>
  );
};

export default ContactFilter;
