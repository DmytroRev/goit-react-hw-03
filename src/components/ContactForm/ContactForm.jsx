import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
// import * as Yup from "yup";

// const UserSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(3, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   // phone: Yup.string()
//   //   .min(3, "Too Short!")
//   //   .max(50, "Too Long!")
//   //   .required("Required"),
// });

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.username,
      phone: values.number,
      id: nanoid(),
    };
    console.log(newContact);
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      // validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <p>Name</p>
          <Field type="text" name="username" />
          {/* <ErrorMessage name="username" component="span" /> */}
        </div>
        <div>
          <p>Number</p>
          <Field type="tel" name="number" />

          {/* <ErrorMessage name="number" component="span" /> */}
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
