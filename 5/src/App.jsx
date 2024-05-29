import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <Fragment className="box">
      count : {count}
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCount}>reset</button>
    </Fragment>
  );
}

export default App;
