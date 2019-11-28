import React from "react";
import PropTypes from "prop-types";

import FormField from "ui/FormField";

const TextInput = ({ mode, label, options, value, onChange }) => {
  const onSelectionChange = (e) => {
    onChange(e.target.value);
  };
  const s =
    mode == "radio" ? (
      <>
        {options.map(o => (
          <label key={o.value} style={{ padding: "20px" }}>
            <input checked={o.value === value} className="form-control" type="radio" name="r" value={o.value} label={o.label} onChange={onSelectionChange} /> {o.label}
          </label>
        ))}
      </>
    ) : (
      <select className="form-control" onChange={onSelectionChange} value={value}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  return <FormField label={label}>{s}</FormField>;
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  value: PropTypes.string.isRequired,
  mode: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
