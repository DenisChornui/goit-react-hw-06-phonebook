import { nanoid } from 'nanoid';
import { StyledList, StyledBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getStatusFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledList>
      {filterContacts.map(contact => {
        return (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
            <StyledBtn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </StyledBtn>
          </li>
        );
      })}
    </StyledList>
  );
};
