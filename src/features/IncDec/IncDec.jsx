import React, { useState } from "react";
import Button from "./Button";

const IncDec = () => {
  const [count, setCount] = useState(0);

  const mut = m => {
    return () => {
      setCount(count + m);
    };
  };
  const onIncClick = mut(1);
  const onDecClick = mut(-1);

  return (
    <div className="container form-group">
      <h1>{count}</h1>
      <Button onClick={onIncClick}>Inc</Button>
      <Button onClick={onDecClick}>Dec</Button>
    </div>
  );
};

export default IncDec;
