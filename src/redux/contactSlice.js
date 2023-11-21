import { nanoid } from "nanoid";

const contactInitialState = {
  contacts: [],
};

export const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'contact/add':
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: nanoid() }],
      };
    case 'contact/delete':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addContact = contact => {
  return {
    type: 'contact/add',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contact/delete',
    payload: id,
  };
};
