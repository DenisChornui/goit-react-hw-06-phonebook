import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';

// const getInitialContacts = () => {
//   const saveContacts = localStorage.getItem('contacts');
//   if (saveContacts !== null) {
//     return JSON.parse(saveContacts);
//   }
//   return [];
// };
export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);

  // const [filter, setFilter] = useState('');
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${newContact.name} is already in contacts!`);
  //   }

  //   setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  // };

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
