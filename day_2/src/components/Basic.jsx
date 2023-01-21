import React from "react";
import { Formik } from "formik";

const postData = async (data) => {
  console.log(data);
  let res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });

  let apiData = await res.json();
  console.log(apiData);
  return apiData;
};

const Basic = () => (
  <div>
    <h1>Login Form</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is Required";
        } else if (!values.password) {
          errors.password = "Password is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
          // } else if (
          //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/i.test(
          //     values.password
          //   )
          // ) {
          errors.password = "Invalid password";
        }

        return errors;
      }}
      onSubmit={async (values) => {
        let resQuery = JSON.stringify({
          name: `${values.email}`,
          job: `${values.password}`,
        });
        postData(resQuery);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br></br>
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br></br>

          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
