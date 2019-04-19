import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from './dialog';

export default function() {
  const [x, setX] = useState(false);

  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <button onClick={() =>close()}>close</button>
      </h1>,
    );
  };

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
            </button>,
          ]}
        >
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <button
          onClick={() => {
            alert('1');
          }}
        >
          alert
        </button>
        <button
          onClick={() => {
            confirm(
              '1',
              () => {
                console.log('yes');
              },
              () => {
                console.log('no');
              },
            );
          }}
        >
          confirm
        </button>
      </div>
      <div>
        <h1>example3</h1>
        <button onClick={openModal}>
          modal
        </button>
      </div>
    </div>
  );
}
