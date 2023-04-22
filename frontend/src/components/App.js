import "../css/App.css";
import {useState, useEffect} from 'react';
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from '../utils/ContactsAPI';
import {Routes, Route} from 'react-router-dom';


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

  return (
    <Routes>
      <Route 
      exact path='/' 
      element={<ListContacts contacts={contacts} onDeleteContact={removeContact}/> }
      />
      <Route 
      exact path='/create' 
      element={<CreateContact/> }
      />
    </Routes>
  )
};

export default App;
