import { useDispatch } from 'react-redux';
import { StyledInput, StyledTitle } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const dispatch = useDispatch()
  const contactFilter = evt => {
    dispatch(evt.target.value);
  };

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
