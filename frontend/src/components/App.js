import "../css/App.css";
import {useState, useEffect} from 'react';
import ListContacts from "./ListContacts";
import * as ContactsAPI from '../utils/ContactsAPI';

const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter(c => c.id !== contact.id))
  }
  const [contacts, setContacts] = useState([]);

  //making calls to an external server is a sideEffect
  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };
    //invoke
    getContacts();
  }, [])

  return (
    <>
      <ListContacts onDeleteContact = {removeContact} contacts={contacts}/>
    </>
  )
};

export default App;
