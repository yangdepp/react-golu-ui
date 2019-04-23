import React, { useState } from 'react';
import Dialog from './dialog1';
import { Button } from '../index';

export default function() {
  const [x1, setX1] = useState(false);

  const handelCancel = () => {
    console.log('do something');
    setX1(false);
  };

  return (
    <div>
      <div>
        <h1>example1</h1>
        <Button onClick={() => setX1(true)}>click1</Button>
        <Dialog
          title="0"
          visible={x1}
          okText="ok"
          onOk={() => setX1(false)}
          onCancel={() => handelCancel()}
          // footer={null}
          footer={<Button type="primary" onClick={() => setX1(false)}>ok</Button>}
        />
      </div>
    </div>
  );
}
