import React from "react";

// ! Multiple functions can come from 1 JavaScript file

// ? In JSX
// * class becomes className
// * style requires 2 Curly Brackets
export const HelloWorld = () => {
  return (
    <div className="Hello">
      <h1 style={{color: "red"}}>Hello World!</h1>
    </div>
  );
};

export const GoodbyeWorld = () => {
  return (
    <div className="Goodbye">
      <h1>Goodbye World!</h1>
    </div>
  );
};

// * A default export can be set in a page by specifying which component is default
// *In this case HelloWorld() is the default export
export default HelloWorld;
