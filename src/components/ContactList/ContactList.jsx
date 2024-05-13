import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
