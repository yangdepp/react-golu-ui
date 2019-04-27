import React from "react";
import IconExample from "./icon.example";
import Demo from "../../demo";

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
      <IconExample />
    </Demo>
  );
};

export default IconDemo;