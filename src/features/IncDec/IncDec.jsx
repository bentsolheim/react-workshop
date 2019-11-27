import React, { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const DisplayCounter = props => {
  return <h1>{props.count}</h1>;
};
DisplayCounter.propTypes = {
  count: PropTypes.number.isRequired,
}

const CountControls = (props) => {
  const { count, onCountChange } = props

  const mut = m => {
    return () => {
      onCountChange(count + m);
    };
  };
  const onIncClick = mut(1);
  const onDecClick = mut(-1);
  return (
    <>
      <Button onClick={onDecClick}>Dec</Button>
      <Button onClick={onIncClick}>Inc</Button>
    </>
  );
};
CountControls.propTypes = {
  count: PropTypes.number.isRequired,
  onCountChange: PropTypes.func.isRequired,
}

const IncDec = () => {
  const [count, setCount] = useState(0);

  const onCountChange = (newCount) => {
    setCount(newCount);
  }

  return (
    <div className="container form-group">
      <DisplayCounter count={count} />
      <CountControls count={count} onCountChange={onCountChange} /> 
    </div>
  );
};

export default IncDec;
