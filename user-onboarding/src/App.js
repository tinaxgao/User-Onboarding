import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./Form";
import * as yup from "yup";
import schema from "./validation/formSchema";

// INITIAL STATES
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tos: false,
};
const initialUsers = [];
const initialDisabled = true;

export default function App() {
  // STATES
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);

  // HELPERS - GET & POST DATA
  // get user data from api https://reqres.in/api/users
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; //use in side effect

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data.data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  // EVENT HANDLERS
  // >> declare validation using yup
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" })) //remove error msg if valid
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] })); //if err, displays them
  };

  // >> input change, run validation, display what's typed in
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // >> submit form
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    };
  };

  // SIDE EFFECTS
  useEffect(() => {
    getUsers();
  }, []); // executes axios get users once

  // enables submit button if form is valid
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <h1>Sign-up - app.js</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
