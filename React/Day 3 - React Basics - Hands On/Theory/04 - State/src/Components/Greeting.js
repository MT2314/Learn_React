import React from "react";

const Greeting = ({text, userName, setGreeting}) => {
  return (
    <div>
      <h1>{`${text} ${userName}`}</h1>
      <button onClick={() => setGreeting("Goodbye")}>
        Change the Greeting to Goodbye
      </button>
      <button onClick={() => setGreeting("Hello")}>
        Change the Greeting to Goodbye
      </button>
    </div>
  );
};

export default Greeting;
