import { useSelector, useDispatch } from 'react-redux';

// import initialContacts from './Components/initialsContacts.json';
import { nanoid } from 'nanoid';
import { addItem, deleteItem } from './redux/slice/contact-slice';
import { filterContacts } from './redux/slice/filter-slice';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const id = nanoid();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (existingContact) {
      return alert(`${name} is already in contacts!!!`);
    }
    dispatch(addItem({ id, name, number }));

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  const changeFilter = e => {
    const filterName = e.target.value.toLowerCase();
    dispatch(filterContacts(filterName));
  };
  const filteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
  };
  const deleteContact = contactId => {
    dispatch(deleteItem(contactId));
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
    </>
  );
}
