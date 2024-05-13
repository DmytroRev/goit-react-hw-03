import ContactForm from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { useState } from "react";
import initialContacts from "../../contacts.json";

export default function App() {
  const [contactsUser, setContactsUser] = useState(initialContacts);

  const AddContacts = (newContact) => {
    setContactsUser((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const [filter, setFilter] = useState("");

  const visibleContacts = contactsUser.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
