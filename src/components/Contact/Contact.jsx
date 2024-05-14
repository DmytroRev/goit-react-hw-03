import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

export const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.list}>
        <p className={css.listItem}>
          <IoMdContact className={css.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <div>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
};
