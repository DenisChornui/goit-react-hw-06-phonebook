import { useDispatch } from 'react-redux';
import { StyledInput, StyledTitle } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <div>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput
        type="string"
        name="filter"
        onChange={contactFilter}
      ></StyledInput>
    </div>
  );
};
