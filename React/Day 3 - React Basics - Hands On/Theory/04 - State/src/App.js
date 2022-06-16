// * useState is a Hook within the react package
// * Hooks are function which HOOK into the React state and
// * life cycle. (Before render, after render... timing)
import React, {useState} from "react";

import Greeting from "./Components/Greeting";
import "./styles/App.css";

// ? Props are passed down from the parent to the child
// ? In this example we are passing 2 props
// *  text = "Hello "   &   userName = "Mike"

const App = () => {
  // * useState cannot be used inside other functions, loops or if statements
  // ? greeting is the name of the state, setgreeting is the function that
  // ? we can use to update the state. "Hello is the default value of greetinh"
  const [greeting, setGreeting] = useState("Hello");
  const [name, setName] = useState("Anna");

  return (
    <div className="App">
      <Greeting text={greeting} name={name} setGreeting={setGreeting} />
    </div>
  );
};

export default App;
