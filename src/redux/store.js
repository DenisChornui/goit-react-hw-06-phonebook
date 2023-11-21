import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const rootReaducer = (state = initialState, action) => {
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
    case 'contact/filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReaducer, enhancer);

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

export const setFilter = filterValue => {
  return {
    type: 'contact/filter',
    payload: filterValue,
  };
};
