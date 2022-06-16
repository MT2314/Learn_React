import React, {useState} from "react";

import "./styles/App.css";

const App = () => {
  const [count, setCount] = useState(() => {
    console.log("refresh");
    return 0;
  });

  // ? Incorrect version, will keep referring to count which is set to 0
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // ? Correct version, considers all changes
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
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
