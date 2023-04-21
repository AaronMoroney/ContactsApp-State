import "../css/App.css";
import {useState, useEffect} from 'react';
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from '../utils/ContactsAPI';


const App = () => {
  const removeContact = (contact) => {
    ContactsAPI.remove(contact)
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

  const [screen, setScreen] = useState('list')

  return (
    <div>
      {
        screen === "list" && (
          <ListContacts onDeleteContact = {removeContact} contacts={contacts} 
          onNavigate={() => { setScreen('create'); }}
        />
        )}
      {
        screen === 'create' && (
          <CreateContact />
        ) 
      }
    </div>
  )
};

export default App;
