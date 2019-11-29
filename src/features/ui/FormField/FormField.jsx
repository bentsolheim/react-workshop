import React from "react";
import PropTypes from "prop-types";

const addIdToFirstChild = (children, id) => {
  const [firstChild, ...rest] = React.Children.toArray(children);
  return [React.cloneElement(firstChild, { id }), ...rest];
};

const genId = (qualifier) => qualifier + "_" + Math.random()
      .toString(36)
      .substring(3, 15);



export const FormField = ({ label, children }) => {
  const id = genId(label);

  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}
      </label>
      {addIdToFirstChild(children, id)}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FormField;
