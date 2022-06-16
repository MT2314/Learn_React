import React from "react";

const Greeting = ({text, name, setGreeting}) => {
  return (
    <div>
      <h1>{`${text} ${name}`}</h1>
      <button onClick={() => setGreeting("Goodbye")}>
        {`Change the Greeting to Goodbye`}
      </button>
      <button onClick={() => setGreeting("Hello")}>
        Change the Greeting to Hello
      </button>
    </div>
  );
};

export default Greeting;
