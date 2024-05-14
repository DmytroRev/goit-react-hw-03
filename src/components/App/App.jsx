import ContactForm from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import initialContacts from "../../contacts.json";
import css from "../App/App.module.css";

export default function App() {
  const [contactsUser, setContactsUser] = useState(() => {
    const savedContacts = localStorage.getItem("Contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  const AddContacts = (newContact) => {
    setContactsUser((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const visibleContacts = contactsUser.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContactsUser((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== contactId
      );
      localStorage.setItem("Contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contactsUser));
  }, [contactsUser]);

  return (
    <div className={css.container}>
      <h1 className={css.content}>Phonebook</h1>
      <ContactForm onAdd={AddContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
