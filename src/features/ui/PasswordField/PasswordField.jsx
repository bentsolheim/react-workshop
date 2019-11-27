import React, { useState } from "react";
import PropTypes from "prop-types";

const PasswordField = ({ label, value, onChange }) => {
  const [show, setShow] = useState(false);

  const onShowChange = () => {
    setShow(!show);
  }
  const onPasswordChange = (e) => {
    onChange(e.target.value)
  }

  const input = show ? (
    <input type="text" className="form-control" value={value} onChange={onPasswordChange}/>
  ) : (
    <input type="password" className="form-control" value={value} onChange={onPasswordChange}/>
  );
  return (
    <div className="form-group">
      <label className="control-label">{label}</label>
      {input}
      <label className="control-label">Show password</label>
      <input type="checkbox" className="form-control" onChange={onShowChange}/>
    </div>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PasswordField;
