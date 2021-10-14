import React from "react";

export default function Form(props) {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target; //pull those values from evt.target
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse); //inputChange using the inputted name & value
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit(); //executes the formSubmit func passed in through props
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a user - Form.js</h2>
        <button disabled={disabled}>Submit</button>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>

    <div className="form-group inputs">
        <label>Name
            <input name="name" type="text" value={values.name} onChange={onChange} />
        </label>
        <label>Email
            <input name="email" type="email" value={values.email} onChange={onChange} />
        </label>
        <label>Password
            <input name="password" type="password" value={values.password} onChange={onChange} />
        </label>
        <label>Terms of Service
            <span>I agree to the terms of service</span>
            <input name="tos" type="checkbox" value={values.tos} onChange={onChange}/>
        </label>
    </div>

    </form>
  );
}
