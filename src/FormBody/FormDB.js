import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const allFilds = {
  firstName: {
    label: "نام",
    value: "",
  },
  lastName: {
    label: "نام خانوادگی",
    value: "",
  },
  email: {
    label: "ایمیل",
    value: "",
  },
  colors: {
    label: "رنگ",
    value: "",
  },
  message: {
    label: "پیام",
    value: "",
  },
};

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Field
        className="border border-neutral-300 rounded w-full p-1"
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="absolute top-1 left-0 text-sm text-red-400">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <select
        className="w-full border border-neutral-300 rounded p-1 bg-transparent"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="absolute top-1 left-0 text-sm text-red-400">
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

function FormDB() {
  const initialValues = {
    ...Object.keys(allFilds).reduce((a, v) => ({ ...a, [v]: "" }), {}),
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "باید 3 کاراکتر یا بیشتر وارد کنید")
          .required("الزامی"),
        lastName: Yup.string()
          .min(3, "باید 3 کاراکتر یا بیشتر وارد کنید")
          .required("الزامی"),
        email: Yup.string().email("آدرس ایمیل اشتباه است").required("الزامی"),
        colors: Yup.string().required("الزامی"),
        message: Yup.string().required("الزامی"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="grid grid-cols-4 items-center gap-8">
        {Object.keys(initialValues).map((item) => (
          <label
            key={item}
            htmlFor={item}
            className="block relative w-full max-h"
          >
            <span className="block mb-2">{allFilds[item].label} :</span>
            {item === "colors" ? (
              <>
                <MySelect name={item}>
                  <option value="">None</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </MySelect>
              </>
            ) : item === "message" ? (
              <>
                <Field
                  name={item}
                  as="textarea"
                  className="border border-neutral-300 rounded w-full p-1"
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <div className="absolute top-1 left-0 text-sm text-red-400">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </>
            ) : (
              <>
                <MyTextInput name={item} type="text" />
              </>
            )}
          </label>
        ))}

        <button
          className="block border border-blue-400 p-1 px-6 rounded"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FormDB;
