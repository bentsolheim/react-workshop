import React from "react";
import PropTypes from "prop-types";

const FormField = ({ label, children }) => {
  const inputId = label + "_" +
      Math.random()
        .toString(36)
        .substring(3, 15)

  const [firstChild, ...rest] = React.Children.toArray(children);
  const c = [
    React.cloneElement(firstChild, { id: inputId }),
    ...rest
  ]
  return (
    <div className="form-group">
      <label htmlFor={inputId} className="control-label">
        {label}
      </label>
      {c}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOf(
    PropTypes.elementType,
    PropTypes.arrayOf(PropTypes.elementType)
  )
};

export default FormField;
