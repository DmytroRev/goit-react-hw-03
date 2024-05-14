import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
