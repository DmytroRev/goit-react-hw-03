import ContactForm from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { useState } from "react";
import initialContacts from "../../contacts.json";
import css from "../App/App.module.css";

export default function App() {
  const [contactsUser, setContactsUser] = useState(initialContacts);

  const [filter, setFilter] = useState("");

  const AddContacts = (newContact) => {
    setContactsUser((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const visibleContacts = contactsUser.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(visibleContacts);
  return (
    <div>
      <h1 className={css.container}>Phonebook</h1>
      <ContactForm onAdd={AddContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
