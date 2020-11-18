import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearError, loginUser } from "../../../redux/actions";
import { setToken } from "../../../utils";
import "../auth.scss";

function Login() {
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
    <>
      <div
        style={{
          marginTop: "100px",
          padding: "0 0.5rem",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '420px',
          margin: '100px auto',
        }}
      >
        <p
          style={{
            fontSize: "1rem",
          }}
        >
          Please login to continue.
        </p>

        {shouldShowErrors && <p style={{ color: "red" }}>{error}</p>}
        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            return errors;
          }}
          onSubmit={async (values) => {
            dispatch(loginUser(values));
            setSubmitted(true);
            setShouldShowErrors(true);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <p>Username</p>
              <Field type="text" name="username" className="input" />
              <ErrorMessage name="username" component="div" />
              <p>Password</p>
              <Field type="password" name="password" className="input" />
              <ErrorMessage name="password" component="div" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? `Please wait` : `Submit`}
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Need an account?<Link to="/register"> Sign up here</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
