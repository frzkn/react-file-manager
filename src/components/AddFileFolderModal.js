import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import "./Auth/auth.scss";
import { updateFiles } from "../redux/actions/index";
import { newFileFolder } from "../services/api";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AddFileFolderModal = (props) => {
  const { pathname, setShowAddFileModal } = props;
  const [file, setFile] = useState(true);
  const { user = {} } = useSelector((s) => s.auth);
  const query = useQuery();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "grid",
        placeItems: "center",
        backgroundColor: "rgba(0,0,78,0.3)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "white",
            padding: "1rem 1rem",
            borderRadius: "8px",
            minWidth: "min(420px,90vw)",
            flexDirection: "column",
            boxShadow:
              " 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              letterSpacing: "1.2px",
            }}
          >
            ADD NEW
          </h2>
          <div style={{ display: "flex" }}>
            <button
              className={`add-new-modal__type-button  ${
                file && "add-new-modal__type-button--active"
              }`}
              onClick={() => setFile(true)}
            >
              File
            </button>
            <button
              className={`add-new-modal__type-button ${
                !file && "add-new-modal__type-button--active"
              }`}
              onClick={() => setFile(false)}
            >
              Folder
            </button>
          </div>
          {!file ? (
            <FolderForm
              pathname={pathname}
              id={query.get("id")}
              setShowAddFileModal={setShowAddFileModal}
            />
          ) : (
            <FileForm
              id={query.get("id")}
              user={user}
              setShowAddFileModal={setShowAddFileModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const FolderForm = (props) => {
  const { pathname, id, setShowAddFileModal } = props;
  const dispatch = useDispatch();
  console.log(" folder form says " + pathname);
  console.log(" folder form says " + id);
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={async ({ name }) => {
        try {
          const response = await newFileFolder({
            folder: true,
            name,
            parent_folder: parseInt(`${id}`.replace("/", "")),
          });
          setShowAddFileModal((s) => !s);
          dispatch(updateFiles());
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <p>Folder name</p>
          <Field type="text" name="name" className="input" />
          <ErrorMessage name="name" component="div" />
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
  );
};

const FileForm = (props) => {
  const { user = {}, id, setShowAddFileModal } = props;
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      console.log("here");
      const data = new FormData();
      data.append("file", file);
      data.append("user", user);
      data.append("folder", false);
      data.append("name", file.name);
      data.append("parent_folder", id ? parseInt(id) : 1);
      console.log(data);
      const response = await newFileFolder(data);
      console.log("response here");
      console.log(response);
      setShowAddFileModal((s) => !s);
      dispatch(updateFiles());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Upload a new file</p>
        <input
          id="file"
          name="file"
          type="file"
          className="file"
          style={{background: ''}}
          onChange={(event) => {
            // (event.currentTarget.files[0]);
            // setFile(event.currentTarget.files[0]);
            setFile(event.target.files[0]);
          }}
        />
        <button type="submit" className="submit-button" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

//           {/* "user": {
// "username": "string",
// "email": "user@example.com"
// },
// "name": "string",
// "folder": true,
//file = ""
// "parent_folder": 0 */}

// user: {"user":{}}
// name: asdf.asdf
// file: (binary)
// folder: false
// parent_folder: null
export default AddFileFolderModal;
