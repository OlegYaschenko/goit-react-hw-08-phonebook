import { useSelector, useDispatch } from 'react-redux';
import { FilterLabel, FilterText, FilterInput } from './ContactFilter.styled';
import { filter } from 'redux/filter';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  return (
    <div>
      <FilterLabel>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={e =>
            dispatch(filter(e.currentTarget.value.trim().toLowerCase()))
          }
        />
      </FilterLabel>
    </div>
  );
};

export default ContactFilter;
