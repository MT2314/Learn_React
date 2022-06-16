import React from "react";

const Greeting = ({text, userName}) => {
  return <h1>{`${text} ${userName}`}</h1>;
};

export default Greeting;
