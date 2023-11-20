import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts !== null) {
      this.setState({ contacts: JSON.parse(saveContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  contactFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  render() {
    const filterContacts = this.getFilterContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter items={filterContacts} onChange={this.contactFilter} />
        <ContactList items={filterContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}
