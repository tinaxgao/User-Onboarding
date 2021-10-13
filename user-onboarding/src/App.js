import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

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

  // EVENT HANDLERS

  // SIDE EFFECTS
  
  return (
    <div className="App">
     <h1>Sign-up - app.js</h1>
      {/* <Form values={formValues} change={} submit={} disabled={disabled} errors={formErrors} /> */}
    </div>
  );
}
