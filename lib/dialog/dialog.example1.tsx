import React, { useState } from "react";
// import Dialog, { alert, confirm, modal } from "./dialog";
import Dialog from "./dialog1";
import { Button } from "../index";

export default function() {
  const [x1, setX1] = useState(false);

  const handelCancel = () => {
    console.log('do something');
    setX1(false);
  }

  return (
    <div>
      <div>
        <h1>example1</h1>
        <Button onClick={() => setX1(true)}>click1</Button>
        <Dialog
          visible={x1}
          // onClose={() => setX1(false)}
          okText="ok"
          onOk={() => setX1(false)}
          onCancel={() => handelCancel()}
        />
      </div>
    </div>
  );
}
