import React from "react";

// ? Import brings functions from other JavaScript files.

// ! Use Curly Braces to specify the function name. Multiple functions can come from 1 JavaScript file
import {GoodbyeWorld} from "./Components/OurComponent";

// ! A default export can be set in our JavaScript file
import HelloWorld from "./Components/OurComponent";

// ? Can import stylesheets directly into files. Only elements rendered with App.js as a parent will see the styles
import "./styles/App.css";

// ? App() is a function, just like Hello() & Goodbye() was in Unit 1.
const App = () => {
  // ? Below is a line of JSX. JavaScript with the power to use HTML
  const element = <h1>Hello, world!</h1>;

  return (
    // ! React requires each Return to have a single parent element
    <div>
      <GoodbyeWorld />
      <HelloWorld />
      {element}
    </div>
  );
};

export default App;
