import React, { useState } from "react";
import PropTypes from "prop-types";
import FormField from "ui/FormField";

const PasswordField = ({ label, value, onChange }) => {
  const [show, setShow] = useState(false);

  const onShowChange = () => {
    setShow(!show);
  };
  const onPasswordChange = e => {
    onChange(e.target.value);
  };

  return (
    <FormField label={label}>
      <input type={show ? "text" : "password"} className="form-control" value={value} onChange={onPasswordChange} />
      <label className="control-label">Show password</label>
      <input type="checkbox" className="form-control" onChange={onShowChange} />
    </FormField>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PasswordField;
