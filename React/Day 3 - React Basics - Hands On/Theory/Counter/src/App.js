import React, {useState} from "react";

import Greeting from "./Components/Greeting";
import "./styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [countRight, setCountRight] = useState(() => {
    console.log("Refresh");
    return 0;
  });

  // ? Incorrect version, will keep referring to count which is set to 0
  function incrementCount() {
    setCount(count + 1);
    // setCount(count + 1);
  }

  // ? Correct version, considers all changes
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    // setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default App;
