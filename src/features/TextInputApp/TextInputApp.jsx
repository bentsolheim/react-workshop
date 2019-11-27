import React, { useState } from "react";
import TextInput from "ui/TextInput"

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
