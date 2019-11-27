import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ id, label, value, onChange }) => {
  let inputId = id;
  if (!inputId) {
    inputId =
      "text-input-" +
      Math.random()
        .toString(36)
        .substring(3, 15)
  }
  const onTextInputChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor={inputId} className="control-label">
        {label}
      </label>
      <input id={inputId} className="form-control" type="text" value={value} onChange={onTextInputChange} />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string
};

export default TextInput;
