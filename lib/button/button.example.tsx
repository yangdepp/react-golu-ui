import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button onClick={() => console.log(111)}>click</Button>
      <Button className="eeee">xxx</Button>
    </div>
  );
};

export default ButtonExample;
