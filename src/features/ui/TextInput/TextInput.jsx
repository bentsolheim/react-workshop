import React from "react";
import PropTypes from "prop-types";

import FormField from "ui/FormField";

const TextInput = ({ id, label, value, onChange }) => {
  let inputId = id;
  if (!inputId) {
    inputId =
      "text-input-" +
      Math.random()
        .toString(36)
        .substring(3, 15);
  }
  const onTextInputChange = e => {
    onChange(e.target.value);
  };

  return (
    <FormField label={label}>
      <input id={inputId} className="form-control" type="text" value={value} onChange={onTextInputChange} />
    </FormField>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string
};

export default TextInput;
