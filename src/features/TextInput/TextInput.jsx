import React, { useState } from "react";
import PropTypes from "prop-types";

const TextInput = props => {
  const { label, value, onChange } = props;
  let { id } = props;
  if (!id) {
    id =
      "text-input-" +
      Math.random()
        .toString(36)
        .substring(3, 15)
  }
  const onTextInputChange = e => {
    const newValue = e.target.value;
    onChange(newValue);
  };
  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}
      </label>
      <input id={id} className="form-control" type="text" value={value} onChange={onTextInputChange} />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string
};

const TextInputApp = () => {
  const [firstName, setFirstName] = useState("Påkrevet");
  const [lastName, setLastName] = useState("Påkrevet");
  const onChange = mutator => newValue => {
    mutator(newValue);
  };
  return (
    <>
      <TextInput id="name" label="Fornavn" value={firstName} onChange={onChange(setFirstName)} />
      <TextInput label="Etternavn" value={lastName} onChange={onChange(setLastName)} />
    </>
  );
};

export default TextInputApp;
