import React, { useState } from "react";
import TextInput from "ui/TextInput";
import PasswordField from "ui/PasswordField";
import SelectInput from "ui/SelectInput";

const TextInputApp = () => {
  const [firstName, setFirstName] = useState("Påkrevet");
  const [lastName, setLastName] = useState("Påkrevet");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");
  const onChange = mutator => newValue => {
    mutator(newValue);
  };

  const options = [
    { label: "Bent", value: "1" },
    { label: "Are", value: "2" },
    { label: "Espen", value: "3" }
  ];
  return (
    <>
      <TextInput label="Fornavn" value={firstName} onChange={onChange(setFirstName)} />
      <TextInput label="Etternavn" value={lastName} onChange={onChange(setLastName)} />
      <PasswordField label="Password" value={password} onChange={onChange(setPassword)} />

      <SelectInput label="Selection" options={options} value={select} onChange={onChange(setSelect)} />
      <SelectInput label="Radio" mode="radio" options={options} value={select} onChange={onChange(setSelect)} />
    </>
  );
};

export default TextInputApp;
