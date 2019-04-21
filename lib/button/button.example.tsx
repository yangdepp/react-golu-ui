import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button onClick={() => console.log(111)}>default</Button>
      <Button disabled>disabled</Button>
      <Button type="primary" onClick={() => console.log(111)}>primary</Button>
    </div>
  );
};

export default ButtonExample;
