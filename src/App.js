import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { AddContact, EditContact, ViewContact, Contacts, Navbar } from './components';
import { createContact, getAllContacts, getAllGroups } from './services/contactService';
import './App.css';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [])

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const {status} = await createContact(getContact);
      
      if (status === 201) {
        setContact({});
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const setContactInfo = (event) => {
    setContact({
      ...getContact, [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/contacts' />} />
        <Route
          path='/contacts'
          element={
            <Contacts
              contacts={getContacts}
              loading={loading}
            />
          }
        />

        <Route
          path='/contacts/add'
          element={
            <AddContact
              loading={loading}
              setContactInfo={setContactInfo}
              contact={getContact}
              groups={getGroups}
              createContactForm={createContactForm}
            />
          }
        />
        <Route path='/contacts/:contactId' element={<ViewContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
