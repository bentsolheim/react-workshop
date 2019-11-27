import React, { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count er {count}</h1>
      <p>{count % 2 == 0 ? "even" : "odd"}</p>
      <button onClick={onIncrementClick}>Increment</button>
    </div>
  );
};

class IncrementClass extends React.PureComponent {
  state = {
    count: 0
  };

  onIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>{this.state.count % 2 == 0 ? "even" : "odd"}</p>
        <button onClick={this.onIncrementClick}>Increment</button>
      </div>
    );
  }
}

export default Increment;
