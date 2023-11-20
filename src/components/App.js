import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, } from './App.styled';

const getInitialContacts = () => {
  const saveContacts = localStorage.getItem('contacts');
  if (saveContacts !== null) {
    return JSON.parse(saveContacts);
  }
  return [];
};
export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const contactFilter = evt => {
    setFilter(evt.target.value);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter items={filterContacts} onChange={contactFilter} />
      <ContactList items={filterContacts} onDelete={deleteContact} />
    </Container>
  );
};
