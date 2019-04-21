import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";
import { Button } from "../index";

export default function() {
  const [x, setX] = useState(false);

  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <Button onClick={() => close()}>close</Button>
      </h1>
    );
  };

  return (
    <div>
      <div>
        <h1>example2</h1>
        <Button onClick={() => setX(!x)} type="primary">
          click
        </Button>
        <Dialog
          visible={x}
          onClose={() => {
            setX(false);
          }}
          buttons={[
            <Button
              onClick={() => {
                setX(false);
              }}
              type="primary"
            >
              ok
            </Button>,
            <Button
              onClick={() => {
                setX(false);
              }}
            >
              cancle
            </Button>
          ]}
        >
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <Button
          onClick={() => {
            alert("1");
          }}
          type="primary"
        >
          alert
        </Button>
        <Button
          onClick={() => {
            confirm(
              "1",
              () => {
                console.log("yes");
              },
              () => {
                console.log("no");
              }
            );
          }}
        >
          confirm
        </Button>
      </div>
      <div>
        <h1>example3</h1>
        <Button onClick={openModal} type="primary">
          modal
        </Button>
      </div>
    </div>
  );
}
