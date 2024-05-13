import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  return (
    <div className={css.container}>
      <div className={css.list}>
        <p className={css.listItem}>
          <IoMdContact />
          {contact.name}
        </p>
        <p>
          <FaPhone />
          {contact.phone}
        </p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};
