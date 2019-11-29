import React, { useState } from "react";
import TextInput from "ui/TextInput";
import SelectInput from "ui/SelectInput";

export const UserForm = ({ user, onUserSubmitted }) => {

  const [name, setName] = useState(user.name);
  const [description, setDescription] = useState(user.description);
  const [role, setRole] = useState(user.role);

  const roles = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" }
  ];

  const onSubmitClick = () => {
    const user = {
      name,
      description,
      role
    }
    onUserSubmitted(user);
  }

  return (
    <div>
      <TextInput label="Name" value={name} onChange={setName} />
      <TextInput label="Description" value={description} onChange={setDescription} />
      <SelectInput label="Role" options={roles} value={role} onChange={setRole} />
      <button className="btn btn-primary" onClick={onSubmitClick}>
        Submit
      </button>
    </div>
  );
};

export default UserForm;
