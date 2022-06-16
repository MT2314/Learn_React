import React from "react";

import Greeting from "./Components/Greeting";
import "./styles/App.css";

// ? Props are passed down from the parent to the child
// ? In this example we are passing 2 props
// *  text = "Hello "   &   userName = "Mike"

const App = () => {
  return (
    <div className="App">
      <Greeting text="Hello" userName="Mike" />
    </div>
  );
};

export default App;
