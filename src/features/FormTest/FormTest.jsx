import React, { useState } from "react";
import TextInput from "ui/TextInput"
import PasswordField from "ui/PasswordField";

const TextInputApp = () => {
  const [firstName, setFirstName] = useState("Påkrevet");
  const [lastName, setLastName] = useState("Påkrevet");
  const [password, setPassword] = useState("");
  const onChange = mutator => newValue => {
    mutator(newValue);
  };
  return (
    <>
      <TextInput label="Fornavn" value={firstName} onChange={onChange(setFirstName)} />
      <TextInput label="Etternavn" value={lastName} onChange={onChange(setLastName)} />
      <PasswordField label="Password" value={password} onChange={onChange(setPassword)} />
    </>
  );
};

export default TextInputApp;
