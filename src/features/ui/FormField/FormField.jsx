import React from "react";
import PropTypes from "prop-types";

const FormField = ({ label, children }) => {
  const inputId = label + "_" +
      Math.random()
        .toString(36)
        .substring(3, 15)

  const c = Array.isArray(children) ? children : [children]

  const firstChild = React.cloneElement(c[0], { id: inputId })
  return (
    <div className="form-group">
      <label htmlFor={inputId} className="control-label">
        {label}
      </label>
      {[firstChild, ...c.slice(1)]}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormField;
