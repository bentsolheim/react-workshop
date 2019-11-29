import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const onNumericInputChange = onChange => e => {
  const newValue = parseInt(e.target.value);
  if (isNaN(newValue)) {
    return;
  }
  onChange(newValue);
};

const DisplayCounter = props => {
  return (
    <div className="form-group">
      <label>Count</label>
      <input
        type="text"
        className="form-control"
        value={props.count}
        onChange={onNumericInputChange(props.onCountChange)}
      />
    </div>
  );
};
DisplayCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onCountChange: PropTypes.func.isRequired
};

const CountControls = props => {
  const { count, onCountChange } = props;

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
  onCountChange: PropTypes.func.isRequired
};

const IncDec = ({ count, setCount }) => {
  // const [count, setCount] = useState(0);

  const onCountChange = newCount => {
    setCount(newCount);
  };

  return (
    <div className="container form-group">
      <DisplayCounter count={count} onCountChange={onCountChange} />
      <CountControls count={count} onCountChange={onCountChange} />
    </div>
  );
};

IncDec.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
}

export default IncDec;
