import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearError, registerUser } from "../../../redux/actions";
import { setToken } from "../../../utils";
import "../auth.scss";

function Register() {
  const [shouldShowErrors, setShouldShowErrors] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { hasToken, error } = useSelector((s) => s.auth);

  useEffect(() => {
    if (hasToken && submitted) {
      history.push("/");
    }
  }, [history, hasToken, submitted]);

  useEffect(() => {
    setToken("");
    dispatch(clearError());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "100px", padding: " 0 1rem" }}>
      <p
        style={{
          fontSize: "1rem",
        }}
      >
        Register a new account here.
      </p>
      {shouldShowErrors && (
        <p style={{ color: "red" }}>{typeof error === "string" && error}</p>
      )}

      {shouldShowErrors && (
        <p style={{ color: "red" }}>
          {typeof error === "object" && (
            <ul>
              {Object.values(error).map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
          )}
        </p>
      )}

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          dispatch(registerUser(values));
          setSubmitted(true);
          setShouldShowErrors(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>Username</p>
            <Field type="text" name="username" className="input" />
            <ErrorMessage name="username" component="div" />
            <p>Email</p>
            <Field type="email" name="email" className="input" />
            <ErrorMessage name="email" component="div" />
            <p>Password</p>
            <Field type="password" name="password" className="input" />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? `Please wait...` : `Submit`}
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Already have an account?<Link to="/login"> Sign up here</Link>
      </p>
    </div>
  );
}

export default Register;
