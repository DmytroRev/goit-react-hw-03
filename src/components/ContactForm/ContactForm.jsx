import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.username,
      number: values.number,
      id: nanoid(),
    };
    console.log(newContact);
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.containerList}>
          <p>Name</p>
          <Field className={css.contactFormInput} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.containerList}>
          <p>Number</p>
          <Field className={css.contactFormInput} type="tel" name="number" />

          <ErrorMessage
            className={css.errorNum}
            name="number"
            component="span"
          />
        </div>
        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
