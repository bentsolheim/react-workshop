import React, { useState, useEffect } from "react";
import TextInput from "ui/TextInput";
import SelectInput from "ui/SelectInput";

export const UserForm = ({ user, onUserUpdated }) => {

  console.log("UserForm", user)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setName(user.name)
    setDescription(user.description)
    setRole(user.role)
  }, [user])

  console.log(name, description, role)

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
    onUserUpdated(user);
  }
  const onClearClick = () => {
    const user = {
      name: "",
      description: "",
      role: ""
    }
    onUserUpdated(user);
  }

  return (
    <div>
      <TextInput label="Name" value={name} onChange={setName} />
      <TextInput label="Description" value={description} onChange={setDescription} />
      <SelectInput label="Role" options={roles} value={role} onChange={setRole} />
      <button className="btn btn-primary" onClick={onSubmitClick}>
        Submit
      </button>
      <button className="btn btn-primary" onClick={onClearClick}>
        Clear
      </button>
    </div>
  );
};

export default UserForm;
