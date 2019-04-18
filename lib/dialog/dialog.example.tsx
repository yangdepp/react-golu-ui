import React, { useState } from "react";
import Dialog, { alert } from "./dialog";

export default function() {
  const [x, setX] = useState(false);
  return (
    <div>
      <div>
        <h1>example2</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          onClose={() => {
            setX(false);
          }}
          buttons={[
            <button
              onClick={() => {
                setX(false);
              }}
            >
              ok
            </button>,
            <button
              onClick={() => {
                setX(false);
              }}
            >
              cancle
            </button>
          ]}
        >
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <button
          onClick={() => {
            alert("1");
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}
