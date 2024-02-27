import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export const ContactForm = ({ onAddContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "min 3 symbols")
        .max(50, "max 50 symbols")
        .required("This field is required"),
      number: Yup.string()
        .min(3, "min 3 symbols")
        .max(50, "max 50 symbols")
        .required("This field is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      //   const id = nanoid();

      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };

      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number">Номер:</label>
      <input
        type="text"
        id="number"
        name="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
      />
      {formik.touched.number && formik.errors.number ? (
        <div>{formik.errors.number}</div>
      ) : null}

      <button type="submit">Add contact</button>
    </form>
  );
};
